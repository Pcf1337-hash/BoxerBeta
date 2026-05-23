const { neon } = require('@neondatabase/serverless');
const fs = require('fs');

const sql = neon('postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require');

async function exportContent() {
  try {
    const news = await sql`SELECT * FROM news_posts ORDER BY created_at DESC`;
    const entries = await sql`SELECT * FROM guestbook_entries ORDER BY created_at DESC`;
    const albums = await sql`SELECT * FROM albums ORDER BY sort_order`;
    const photos = await sql`SELECT * FROM photos ORDER BY album_id, sort_order`;
    
    const exportData = {
      exportDate: new Date().toISOString(),
      tables: {
        news_posts: news,
        guestbook_entries: entries,
        albums: albums,
        photos: photos
      },
      stats: {
        newsCount: news.length,
        entriesCount: entries.length,
        albumsCount: albums.length,
        photosCount: photos.length
      }
    };
    
    // Write full export
    fs.writeFileSync('database-export.json', JSON.stringify(exportData, null, 2));
    console.log('✅ Exported to database-export.json');
    
    // Print summary
    console.log('\n=== DATABASE EXPORT SUMMARY ===');
    console.log(`News Posts: ${news.length}`);
    console.log(`Guestbook Entries: ${entries.length} (${entries.filter(e => e.approved).length} approved)`);
    console.log(`Albums: ${albums.length}`);
    console.log(`Photos: ${photos.length}`);
    
    // Print detailed content
    console.log('\n=== FULL CONTENT ===\n');
    console.log(JSON.stringify(exportData, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

exportContent();
