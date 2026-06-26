import postgres from "postgres";

const sql = postgres("postgresql://neondb_owner:npg_8s2wMxvbaTj1@ep-long-bread-atyhd99e-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require", { ssl: 'require' });
async function listInvoices() {
  const data = await sql`
     SELECT invoices.amount, customers.name
     FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
     WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
