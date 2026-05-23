import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all") === "true";
    const rows = all
      ? await sql`SELECT * FROM news_posts ORDER BY created_at DESC`
      : await sql`SELECT * FROM news_posts WHERE published = true ORDER BY created_at DESC`;
    return Response.json({ posts: rows });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Laden" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, content, excerpt, image_url, published } = body;
    if (!title || !content) {
      return Response.json(
        { error: "Titel und Inhalt sind Pflicht" },
        { status: 400 },
      );
    }
    const rows = await sql`
      INSERT INTO news_posts (title, content, excerpt, image_url, published)
      VALUES (${title}, ${content}, ${excerpt || null}, ${image_url || null}, ${published !== false})
      RETURNING *
    `;
    return Response.json({ post: rows[0] }, { status: 201 });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Speichern" }, { status: 500 });
  }
}
