import fs from 'fs';
async function download() {
  if (!fs.existsSync('public/logos')) fs.mkdirSync('public/logos', { recursive: true });
  
  const svgs = {
    'netflix': 'netflix/netflix-ar21.svg',
    'disney': 'disney/disney-ar21.svg'
  };
  for (const [name, path] of Object.entries(svgs)) {
    const res = await fetch('https://www.vectorlogo.zone/logos/' + path);
    if (res.ok) {
      fs.writeFileSync('public/logos/' + name + '.svg', await res.text());
      console.log('Downloaded ' + name);
    }
  }
}
download();
