import sql from "@/app/api/utils/sql";

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, description, cover_image } = body;
    const fields = [];
    const values = [];
    let idx = 1;
    if (name !== undefined) {
      fields.push(`name = $${idx++}`);
      values.push(name);
    }
    if (description !== undefined) {
      fields.push(`description = $${idx++}`);
      values.push(description);
    }
    if (cover_image !== undefined) {
      fields.push(`cover_image = $${idx++}`);
      values.push(cover_image);
    }
    if (fields.length === 0)
      return Response.json({ error: "Keine Felder" }, { status: 400 });
    values.push(id);
    const rows = await sql(
      `UPDATE albums SET ${fields.join(", ")} WHERE id = $${idx} RETURNING *`,
      values,
    );
    return Response.json({ album: rows[0] });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await sql`DELETE FROM albums WHERE id = ${id}`;
    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Löschen" }, { status: 500 });
  }
}
