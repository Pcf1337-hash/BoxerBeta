import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all") === "true";
    const rows = all
      ? await sql`SELECT * FROM guestbook_entries ORDER BY created_at DESC`
      : await sql`SELECT * FROM guestbook_entries WHERE approved = true ORDER BY created_at DESC`;
    return Response.json({ entries: rows });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Laden" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { author_name, dog_name, dog_breed, rating, message, visit_year } =
      body;
    if (!author_name || !dog_name || !message) {
      return Response.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }
    const rows = await sql`
      INSERT INTO guestbook_entries (author_name, dog_name, dog_breed, rating, message, visit_year, approved)
      VALUES (${author_name}, ${dog_name}, ${dog_breed || null}, ${rating || 5}, ${message}, ${visit_year || null}, false)
      RETURNING *
    `;
    return Response.json({ entry: rows[0] }, { status: 201 });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Fehler beim Speichern" }, { status: 500 });
  }
}
