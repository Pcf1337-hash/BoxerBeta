const BASE =
  "https://raw.githubusercontent.com/Pcf1337-hash/BoxerBeta/main/uploads/boxerfoto";
const img = (n) => `${BASE}/Boxerhof-${n}.jpg`;

export const boxerData = {
  hero: {
    title: "Ihr Hund macht bei uns Urlaub.",
    subtitle: "Die exklusive Hundepension ohne Zwinger.",
    image: img(1),
  },
  manifest: {
    text: "Manuela Büscher führt den Boxerhof seit 2009. Ohne Boxen. Ohne Käfige. Mit echten Zimmern, echten Betten, echten Spaziergängen über 4.000 Quadratmeter.",
    keywords: ["Ohne Boxen", "Ohne Käfige", "Echte Zimmer", "4.000 qm Auslauf"],
  },
  rooms: [
    {
      id: 1,
      name: "Eichen-Zimmer",
      emoji: "🌳",
      description:
        "Unser sonnigster Raum – lichtdurchflutet und geräumig. Der Blick auf die große Wiese lässt keinen Hund kalt.",
      sqm: 18,
      price: 35,
      image: img(4),
      gallery: [img(8), img(12)],
      features: ["Wiesenblick", "18 m²", "Echtes Bett", "Ruhige Lage"],
      accent: "#6b7c3c",
    },
    {
      id: 2,
      name: "Birken-Zimmer",
      emoji: "🌿",
      description:
        "Hell und einladend mit direktem Gartenzugang. Ideal für Hunde, die gerne mal schnell raus möchten.",
      sqm: 15,
      price: 32,
      image: img(5),
      gallery: [img(9), img(14)],
      features: ["Gartenzugang", "15 m²", "Kuschelecke", "Naturnah"],
      accent: "#4a7c59",
    },
    {
      id: 3,
      name: "Tannen-Zimmer",
      emoji: "🌲",
      description:
        "Am Waldrand gelegen und angenehm kühl. Für ruhige oder sensible Hunde der perfekte Rückzugsort.",
      sqm: 16,
      price: 34,
      image: img(6),
      gallery: [img(13), img(15)],
      features: ["Waldnah", "16 m²", "Sehr ruhig", "Für Sensibelchen"],
      accent: "#3d6b50",
    },
    {
      id: 4,
      name: "Erlen-Zimmer",
      emoji: "🍂",
      description:
        "Unser Familienzimmer – das größte im Haus. Geschwister oder beste Freunde schlafen hier zusammen.",
      sqm: 22,
      price: 38,
      image: img(7),
      gallery: [img(10), img(16)],
      features: ["Für 2 Hunde", "22 m²", "Großzügig", "Familienfreundlich"],
      accent: "#7c5a2e",
    },
  ],
  manuela: {
    name: "Manuela Büscher",
    title: "Inhaberin & Herzstück des Hofes",
    bio: "Als gelernte Tierpflegerin habe ich 2009 meinen Traum verwirklicht: Ein Ort, an dem Hunde nicht verwahrt werden, sondern leben. Der Boxerhof ist mein Zuhause – und jeder Gast wird Teil unserer Familie.",
    quote:
      "Mein Ziel: Ein Urlaub, der so schön ist, dass der Hund gar nicht mehr weg will.",
    image: img(2),
    stats: [
      { label: "Jahre Erfahrung", value: "16" },
      { label: "Betreute Hunde", value: "2.400+" },
      { label: "Stammgäste", value: "78%" },
    ],
  },
  lifestyle: {
    title: "Das Hofleben",
    captionWords: [
      "4.000 qm.",
      "Wiese.",
      "Wald.",
      "Bach.",
      "Schatten.",
      "Frieden.",
    ],
    row1: [
      { src: img(8), alt: "Freie Läufe auf der großen Wiese" },
      { src: img(9), alt: "Gemeinsam erkunden" },
      { src: img(10), alt: "Frischer Wind & Freiheit" },
      { src: img(11), alt: "Spielzeit auf der Wiese" },
      { src: img(12), alt: "Waldspaziergang" },
      { src: img(13), alt: "Am Bach entlang" },
      { src: img(14), alt: "Abenteuer im Grünen" },
    ],
    row2: [
      { src: img(15), alt: "Entdeckungsreise" },
      { src: img(16), alt: "Pure Hundezufriedenheit" },
      { src: img(17), alt: "Entspannung pur" },
      { src: img(18), alt: "Freunde fürs Leben" },
      { src: img(19), alt: "Der perfekte Urlaub" },
      { src: img(20), alt: "Sorglos und glücklich" },
      { src: img(21), alt: "Gemeinsame Momente" },
      { src: img(22), alt: "Glückliche Hunde" },
      { src: img(23), alt: "Boxerhof-Idylle" },
      { src: img(24), alt: "Sommertag auf dem Hof" },
      { src: img(25), alt: "Erinnerungen fürs Leben" },
    ],
  },
};
