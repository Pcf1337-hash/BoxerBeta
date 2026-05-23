import sql from "@/app/api/utils/sql";

export async function GET() {
  try {
    const albums =
      await sql`SELECT * FROM albums ORDER BY sort_order ASC, created_at DESC`;
    const photos =
      await sql`SELECT * FROM photos ORDER BY sort_order ASC, created_at ASC`;
    const result = albums.map((album) => ({
      ...album,
      photos: photos.filter((p) => p.album_id === album.id),
    }));
    return Response.json({ albums: result });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Laden" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, cover_image } = body;
    if (!name)
      return Response.json({ error: "Name ist Pflicht" }, { status: 400 });
    const rows = await sql`
      INSERT INTO albums (name, description, cover_image) VALUES (${name}, ${description || null}, ${cover_image || null}) RETURNING *
    `;
    return Response.json({ album: rows[0] }, { status: 201 });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Speichern" }, { status: 500 });
  }
}
