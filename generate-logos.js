import fs from 'fs';

async function generate() {
  if (!fs.existsSync('public/logos')) fs.mkdirSync('public/logos', { recursive: true });

  const logos = {
    primevideo: { text: 'prime video', color: '#00A8E1', style: 'italic' },
    aha: { text: 'aha', color: '#FF4D00', style: 'normal' },
    sillymonks: { text: 'SillyMonks', color: '#F9A01B', style: 'normal' },
    zee5: { text: 'ZEE5', color: '#8230C6', style: 'normal' },
    etvwin: { text: 'ETV WIN', color: '#D8252B', style: 'normal' }
  };

  for (const [key, data] of Object.entries(logos)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" width="200" height="40">
      <text x="0" y="28" fill="${data.color}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="24" font-style="${data.style}">${data.text}</text>
    </svg>`;
    fs.writeFileSync(`public/logos/${key}.svg`, svg);
  }
}

generate();
