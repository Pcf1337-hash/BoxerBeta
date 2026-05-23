export async function POST(request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "boxerhof2024";
    if (password === adminPassword) {
      return Response.json({
        success: true,
        token: Buffer.from(`boxerhof:${Date.now()}`).toString("base64"),
      });
    }
    return Response.json({ error: "Falsches Passwort" }, { status: 401 });
  } catch (e) {
    return Response.json({ error: "Fehler" }, { status: 500 });
  }
}
