import sql from "@/app/api/utils/sql";

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { approved } = body;
    const rows = await sql`
      UPDATE guestbook_entries SET approved = ${approved} WHERE id = ${id} RETURNING *
    `;
    return Response.json({ entry: rows[0] });
  } catch (e) {
    console.error(e);
    return Response.json(
      { error: "Fehler beim Aktualisieren" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await sql`DELETE FROM guestbook_entries WHERE id = ${id}`;
    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Löschen" }, { status: 500 });
  }
}
