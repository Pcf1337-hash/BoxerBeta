const { neon } = require('@neondatabase/serverless');

async function checkDatabase() {
  const sql = neon('postgresql://neondb_owner:npg_lQ0W5NracdyO@ep-broad-haze-ajv7hjl6.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require');
  
  try {
    // Check existing tables
    const tables = await sql`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `;
    console.log('Existing tables:', tables);
    
    // If no tables, create them
    if (tables.length === 0) {
      console.log('Creating tables...');
      await sql`
        CREATE TABLE news_posts (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          excerpt TEXT,
          image_url TEXT,
          published BOOLEAN DEFAULT true,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `;
      await sql`
        CREATE TABLE guestbook_entries (
          id SERIAL PRIMARY KEY,
          author_name TEXT NOT NULL,
          dog_name TEXT NOT NULL,
          dog_breed TEXT,
          rating INTEGER DEFAULT 5,
          message TEXT NOT NULL,
          visit_year TEXT,
          approved BOOLEAN DEFAULT false,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `;
      await sql`
        CREATE TABLE albums (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          description TEXT,
          cover_image TEXT,
          sort_order INTEGER DEFAULT 0,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `;
      await sql`
        CREATE TABLE photos (
          id SERIAL PRIMARY KEY,
          album_id INTEGER REFERENCES albums(id) ON DELETE CASCADE,
          url TEXT NOT NULL,
          caption TEXT,
          sort_order INTEGER DEFAULT 0,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `;
      console.log('Tables created successfully!');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkDatabase();
