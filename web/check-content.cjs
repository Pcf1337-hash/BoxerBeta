const { neon } = require('@neondatabase/serverless');

const sql = neon('postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require');

async function checkContent() {
  try {
    const news = await sql`SELECT * FROM news_posts ORDER BY created_at DESC`;
    console.log('\n=== NEWS POSTS (' + news.length + ') ===');
    news.forEach(n => console.log(`- [${n.id}] ${n.title} (published: ${n.published})`));
    
    const entries = await sql`SELECT * FROM guestbook_entries ORDER BY created_at DESC`;
    console.log('\n=== GUESTBOOK ENTRIES (' + entries.length + ') ===');
    entries.forEach(e => console.log(`- [${e.id}] ${e.author_name} & ${e.dog_name} (approved: ${e.approved})`));
    
    const albums = await sql`
      SELECT a.*, COUNT(p.id) as photo_count 
      FROM albums a 
      LEFT JOIN photos p ON p.album_id = a.id 
      GROUP BY a.id 
      ORDER BY a.sort_order
    `;
    console.log('\n=== ALBUMS (' + albums.length + ') ===');
    albums.forEach(a => console.log(`- [${a.id}] ${a.name} (${a.photo_count} photos)`));
    
    const photos = await sql`SELECT * FROM photos ORDER BY album_id, sort_order LIMIT 10`;
    console.log('\n=== PHOTOS (showing first 10) ===');
    photos.forEach(p => console.log(`- [${p.id}] Album ${p.album_id}: ${p.caption || 'no caption'}`));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkContent();
