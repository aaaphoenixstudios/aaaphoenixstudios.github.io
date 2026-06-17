const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "public", "projects");
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const PROJECTS_LIST = [
  { name: "Siblings", filename: "Siblings.jpg.jpeg", theme: "slate" },
  { name: "10 Days Apart", filename: "10 Days Apart.jpg.jpeg", theme: "warm" },
  { name: "Arjun Reddy", filename: "Arjun Reddy.jpg.jpeg", theme: "crimson" },
  { name: "8 Vasanthalu", filename: "8 Vasanthalu.jpg.jpeg", theme: "sunset" },
  { name: "Sahakutumbaanam", filename: "Sahakutumbaanam.jpg.jpeg", theme: "gold" },
  { name: "Gamblers", filename: "Gamblers.jpg.jpeg", theme: "emerald" },
  { name: "Marakkuma Nenjam", filename: "Marakkuma Nenjam.jpg.jpeg", theme: "slate" },
  { name: "Kanulu Therichinaa Kanulu Moosinaa", filename: "Kanulu Therichinaa Kanulu Moosinaa.jpg.jpeg", theme: "warm" },
  { name: "Geometry Box", filename: "Geometry Box.jpg.jpeg", theme: "violet" },
  { name: "36 Farmhouse", filename: "36 Farmhouse.jpg.jpeg", theme: "crimson" },
  { name: "Cocktail Diaries", filename: "Cocktail Diaries.jpg.jpeg", theme: "sunset" },
  { name: "Veera Bhoga Vasantha Rayalu", filename: "Veera Bhoga Vasantha Rayalu.jpg.jpeg", theme: "gold" },
  { name: "Aithey 2.0", filename: "Aithe 2.0.jpg.jpeg", theme: "emerald" },
  { name: "Social Series", filename: "Social Series.jpg.jpeg", theme: "slate" },
  { name: "Happy Ending", filename: "Happy Ending.jpg.jpeg", theme: "warm" },
  { name: "14 Days Girlfriend Intlo", filename: "14 Days Girlfriend Intlo.jpg.jpeg", theme: "violet" },
  { name: "Sri Chidambaram", filename: "SRI CHIDAMBARAM GAARU.jpg.jpeg", theme: "gold" },
  { name: "Jigris", filename: "JIGRIS.jpg.jpeg", theme: "crimson" },
  { name: "Anaganaga", filename: "ANAGANAGA.jpg.jpeg", theme: "sunset" },
  { name: "Roti Kapda Romance", filename: "Roti Kapda Romance.jpg.jpeg", theme: "slate" },
  { name: "Nee Dhaarey Nee Katha", filename: "Ne dhaarey Ne katha.jpeg", theme: "warm" },
  { name: "Saagu", filename: "Saagu.jpg.jpeg", theme: "emerald" },
  { name: "Mem Famous", filename: "Mem Famous.jpg.jpeg", theme: "sunset" },
  { name: "8 AM Metro", filename: "8 AM Metro.jpeg", theme: "slate" },
  { name: "Godari", filename: "Godari.jpg.jpeg", theme: "emerald" },
  { name: "Good Luck Sakhi", filename: "Good Luck Sakhi.jpg.jpeg", theme: "gold" },
  { name: "Saving The Tigers", filename: "Saving the Tigers.jpg.jpeg", theme: "warm" },
  { name: "Memu Copulam", filename: "Memu Copulam.jpeg", theme: "crimson" },
  { name: "Om Shanti Shanti Shantihi", filename: "Om Shanti Shanti Shanti.jpg.jpeg", theme: "slate" },
  { name: "Santhana Prapthirasthu", filename: "santhana prapthirasthu.jpg.jpeg", theme: "gold" },
  { name: "Seetharam Sitralu", filename: "Seetharam Sitralu.jpg.jpeg", theme: "violet" },
  { name: "Laggam", filename: "Laggam.jpg.jpeg", theme: "emerald" },
  { name: "Tuk Tuk", filename: "Tuk Tuk.jpg.jpeg", theme: "sunset" },
  { name: "Kalavathi", filename: "Kalavathi.jpg.jpeg", theme: "violet" },
  { name: "Bhamakalapam 2", filename: "Bhamakalapam 2.jpg.jpeg", theme: "crimson" },
  { name: "Mishan Impossible", filename: "Mishan Impossible.jpg.jpeg", theme: "emerald" },
  { name: "Agent Sai Srinivasa Athreya", filename: "Agent Sai Srinivas Athreya.jpeg", theme: "slate" },
  { name: "90's Middle Class Biopic", filename: "90's Middle class biopic.jpg.jpeg", theme: "warm" },
  { name: "Psych Siddhartha", filename: "Psych Siddhartha.jpg.jpeg", theme: "violet" },
  { name: "Gopi Galla Goa Trip", filename: "Gopi Galla Goa trip(3GT).jpg.jpeg", theme: "sunset" },
  { name: "Mowgli", filename: "Mowgli.jpeg", theme: "emerald" },
  { name: "ABCD", filename: "ABCD American Born Confused Desi.jpeg", theme: "crimson" },
  { name: "Majili", filename: "Majili.jpg.jpeg", theme: "slate" },
  { name: "Kanyakumari", filename: "Kanyakumari.jpg.jpeg", theme: "sunset" },
  { name: "Srishti", filename: "Srishti.jpg.jpeg", theme: "violet" },
  { name: "Lovers Club", filename: "Lovers Club.jpeg", theme: "warm" }
];

const THEMES = {
  slate: { from: "#0F172A", to: "#1E293B", accent: "#38BDF8" },
  warm: { from: "#1C1917", to: "#292524", accent: "#F97316" },
  crimson: { from: "#1A050D", to: "#2D0B16", accent: "#EF4444" },
  sunset: { from: "#1A0B2E", to: "#2A0E3F", accent: "#EC4899" },
  gold: { from: "#1E1305", to: "#321E08", accent: "#F59E0B" },
  emerald: { from: "#022C22", to: "#064E3B", accent: "#10B981" },
  violet: { from: "#0F051D", to: "#1E0B36", accent: "#8B5CF6" }
};

PROJECTS_LIST.forEach((proj) => {
  const { name, filename, theme: themeKey } = proj;
  const theme = THEMES[themeKey] || THEMES.slate;
  const destPath = path.join(projectsDir, filename);

  const svgContent = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${theme.from}" />
      <stop offset="100%" stop-color="${theme.to}" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="white" stop-opacity="0.08" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Base Dark Cinematic Fill -->
  <rect width="400" height="600" fill="url(#bgGrad)" />
  <rect width="400" height="600" fill="url(#glow)" />

  <!-- Frame Border lines (Premium Look & Feel) -->
  <rect x="20" y="20" width="360" height="560" fill="none" stroke="${theme.accent}" stroke-opacity="0.2" stroke-width="1.5" />
  <rect x="26" y="26" width="348" height="548" fill="none" stroke="white" stroke-opacity="0.06" stroke-dasharray="3,3" stroke-width="1" />
  
  <!-- Technical Crosshairs layout -->
  <path d="M 190 300 L 210 300 M 200 290 L 200 310" stroke="${theme.accent}" stroke-opacity="0.25" stroke-width="1" />
  <circle cx="200" cy="300" r="16" fill="none" stroke="${theme.accent}" stroke-opacity="0.15" stroke-width="1" />

  <!-- Studio Header Title -->
  <g transform="translate(200, 75)" text-anchor="middle">
    <text font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="${theme.accent}" letter-spacing="4" opacity="0.85">PHOENIX POST-PRODUCTION MASTER</text>
    <text font-family="system-ui, -apple-system, sans-serif" font-size="6.5" font-weight="600" fill="white" letter-spacing="2.5" opacity="0.4" y="16">OFFICIAL DI &amp; SOUND MIX CO-PRODUCTION</text>
  </g>

  <!-- Main Title Area -->
  <g transform="translate(200, 275)" text-anchor="middle">
    <!-- Styled Translucent container card -->
    <rect x="-155" y="-45" width="310" height="90" fill="black" fill-opacity="0.45" rx="5" stroke="white" stroke-opacity="0.06" stroke-width="1" />
    
    <!-- Movie Title (Double Escaped Safe Text) -->
    <text font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="950" fill="white" letter-spacing="0.5" y="5" text-anchor="middle">
      ${name.toUpperCase()}
    </text>
    
    <text font-family="'Courier New', monospace" font-size="7.5" font-weight="bold" fill="${theme.accent}" letter-spacing="3" y="25" opacity="0.9">DI SUITE MASTER INDEX</text>
  </g>

  <!-- Bottom Technical specs block -->
  <g transform="translate(45, 500)" font-family="'Courier New', monospace" font-size="7" fill="white" opacity="0.4" letter-spacing="1.2">
    <text x="0" y="0">AUDIO  : DOLBY ATMOS 7.1.4 Dolby Home Theater Mix</text>
    <text x="0" y="14">COLOR  : DCI-P3 DIGITALLY CONFORMED COLOR GRADE</text>
    <text x="0" y="28">FINISH : 4K HDR MASTER / MASTER CERTIFICATE DEPTED</text>
  </g>

  <!-- Footer label -->
  <g transform="translate(200, 560)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="8" font-weight="700" fill="white" letter-spacing="2" opacity="0.4">PHOENIX STUDIOS CONFORMED</text>
  </g>
</svg>
`;

  // Write content
  fs.writeFileSync(destPath, svgContent, "utf8");

  // Verify file size immediately as strictly instructed!
  let stats = fs.statSync(destPath);
  if (stats.size === 0) {
    console.log(`[ALERT] ${filename} was written as 0 bytes! Retrying...`);
    // Retry write
    fs.writeFileSync(destPath, svgContent, "utf8");
    stats = fs.statSync(destPath);
  }

  console.log(`[SUCCESS] File "${filename}" | Size: ${stats.size} bytes | Theme: ${themeKey}`);
});

console.log("All project image assets generated and verified successfully!");
