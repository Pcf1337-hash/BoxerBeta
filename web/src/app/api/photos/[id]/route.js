import sql from "@/app/api/utils/sql";

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { caption } = body;
    const rows =
      await sql`UPDATE photos SET caption = ${caption} WHERE id = ${id} RETURNING *`;
    return Response.json({ photo: rows[0] });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await sql`DELETE FROM photos WHERE id = ${id}`;
    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Löschen" }, { status: 500 });
  }
}
