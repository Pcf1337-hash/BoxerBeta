import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const { album_id, url, caption } = body;
    if (!album_id || !url)
      return Response.json(
        { error: "Album und URL sind Pflicht" },
        { status: 400 },
      );
    const rows = await sql`
      INSERT INTO photos (album_id, url, caption) VALUES (${album_id}, ${url}, ${caption || null}) RETURNING *
    `;
    // Update album cover if not set
    await sql`UPDATE albums SET cover_image = ${url} WHERE id = ${album_id} AND cover_image IS NULL`;
    return Response.json({ photo: rows[0] }, { status: 201 });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Speichern" }, { status: 500 });
  }
}
