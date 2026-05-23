import sql from "@/app/api/utils/sql";

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { title, content, excerpt, image_url, published } = body;
    const fields = [];
    const values = [];
    let idx = 1;
    if (title !== undefined) {
      fields.push(`title = $${idx++}`);
      values.push(title);
    }
    if (content !== undefined) {
      fields.push(`content = $${idx++}`);
      values.push(content);
    }
    if (excerpt !== undefined) {
      fields.push(`excerpt = $${idx++}`);
      values.push(excerpt);
    }
    if (image_url !== undefined) {
      fields.push(`image_url = $${idx++}`);
      values.push(image_url);
    }
    if (published !== undefined) {
      fields.push(`published = $${idx++}`);
      values.push(published);
    }
    if (fields.length === 0)
      return Response.json({ error: "Keine Felder" }, { status: 400 });
    values.push(id);
    const rows = await sql(
      `UPDATE news_posts SET ${fields.join(", ")} WHERE id = $${idx} RETURNING *`,
      values,
    );
    return Response.json({ post: rows[0] });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await sql`DELETE FROM news_posts WHERE id = ${id}`;
    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Löschen" }, { status: 500 });
  }
}
