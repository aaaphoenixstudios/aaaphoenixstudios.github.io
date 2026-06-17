import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import compression from "compression";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable Gzip/deflate compression for HTTP responses
  app.use(compression());

  // JSON payloads parser
  app.use(express.json({ limit: "50mb" }));

  // Bootstrap structural public folders for dynamic media CMS auto-detection.
  const PUBLIC_PATH = path.join(process.cwd(), "public");
  const MEDIA_DIRS = ["team", "studio", "gallery", "projects", "platforms", "hero"];
  
  if (!fs.existsSync(PUBLIC_PATH)) {
    fs.mkdirSync(PUBLIC_PATH, { recursive: true });
  }
  
  MEDIA_DIRS.forEach((dir) => {
    const dirPath = path.join(PUBLIC_PATH, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  // Intercept image requests to serve them directly or handle 0-byte placeholders & missing files
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();

    const decodedPath = decodeURIComponent(req.path);
    const ext = path.extname(decodedPath).toLowerCase();
    
    // Check if the request is for an image
    if (![".jpg", ".jpeg", ".png", ".webp", ".svg"].includes(ext)) {
      return next();
    }

    const filename = path.basename(decodedPath);
    
    // 1. Try to find the file in the public directory or project root
    let foundPath: string | null = null;
    let categoryFolder: string | null = null;

    // Helper to generate a hyphenated fallback path
    const getHyphenatedPath = (p: string) => {
      const dir = path.dirname(p);
      const name = path.basename(p);
      return path.join(dir, name.replace(/ /g, '-'));
    };

    // Check direct path first, e.g., if requesting /projects/Saagu.jpg.jpeg
    const directPath = path.join(PUBLIC_PATH, decodedPath);
    const directHyphenatedPath = getHyphenatedPath(directPath);
    const rootPath = path.join(process.cwd(), decodedPath);
    const rootHyphenatedPath = getHyphenatedPath(rootPath);

    if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
      foundPath = directPath;
    } else if (fs.existsSync(directHyphenatedPath) && fs.statSync(directHyphenatedPath).isFile()) {
      foundPath = directHyphenatedPath;
    } else if (fs.existsSync(rootPath) && fs.statSync(rootPath).isFile()) {
      foundPath = rootPath;
    } else if (fs.existsSync(rootHyphenatedPath) && fs.statSync(rootHyphenatedPath).isFile()) {
      foundPath = rootHyphenatedPath;
    }

    if (foundPath) {
      if (decodedPath.startsWith("/projects/")) categoryFolder = "projects";
      else if (decodedPath.startsWith("/team/")) categoryFolder = "team";
      else if (decodedPath.startsWith("/gallery/")) categoryFolder = "gallery";
      else if (decodedPath.startsWith("/studio/")) categoryFolder = "studio";
    } else {
      // If not found at direct path, let's scan subfolders for direct image name matches (e.g. /Saagu.jpg.jpeg)
      const subdirs = ["projects", "team", "gallery", "studio", "platforms", "hero"];
      const hyphenatedFilename = filename.replace(/ /g, '-');
      for (const dir of subdirs) {
        const potentialPath = path.join(PUBLIC_PATH, dir, filename);
        const potentialHyphenatedPath = path.join(PUBLIC_PATH, dir, hyphenatedFilename);
        
        if (fs.existsSync(potentialPath) && fs.statSync(potentialPath).isFile()) {
          foundPath = potentialPath;
          categoryFolder = dir;
          break;
        } else if (fs.existsSync(potentialHyphenatedPath) && fs.statSync(potentialHyphenatedPath).isFile()) {
          foundPath = potentialHyphenatedPath;
          categoryFolder = dir;
          break;
        }
      }
    }

    // Force treat missing /projects/ or root-level project image requests as dynamic poster SVGs in case they are deleted or missing!
    const isProjectRequest = decodedPath.startsWith("/projects/") || 
                             decodedPath.toLowerCase().includes("projects") || 
                             categoryFolder === "projects" ||
                             (!categoryFolder && !decodedPath.startsWith("/team/") && !decodedPath.startsWith("/studio/") && !decodedPath.startsWith("/gallery/"));

    if (foundPath) {
      try {
        const stats = fs.statSync(foundPath);
        if (stats.size > 0) {
          // Read first 100 bytes to check if it's an SVG on disk masquerading as jpeg/png
          const buffer = Buffer.alloc(100);
          try {
            const fd = fs.openSync(foundPath, "r");
            fs.readSync(fd, buffer, 0, 100, 0);
            fs.closeSync(fd);
            const contentHead = buffer.toString("utf8").trim();
            if (contentHead.startsWith("<svg") || contentHead.startsWith("<?xml") || contentHead.includes("<svg")) {
              res.setHeader("Content-Type", "image/svg+xml");
            }
          } catch (readErr) {
            console.error("Error reading file head for MIME check:", readErr);
          }
          if (req.method === "HEAD") {
            return res.status(200).end();
          }
          // Serve the real image file with 1-day Cache-Control header
          res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");
          return res.sendFile(foundPath);
        } else {
          // It's a 0-byte placeholder! Serve our premium dynamically generated SVGs!
          const cleanTitle = normalizeFilename(filename);

          if (isProjectRequest) {
            // Serve spectacular movie poster SVG
            res.setHeader("Content-Type", "image/svg+xml");
            if (req.method === "HEAD") {
              return res.status(200).end();
            }
            
            let sum = 0;
            for (let i = 0; i < cleanTitle.length; i++) sum += cleanTitle.charCodeAt(i);
            const gradients = [
              { from: "#121214", to: "#1B1B1E", accent: "#FC8019" }, // Slate Amber
              { from: "#0B0F19", to: "#111827", accent: "#38bdf8" }, // Cool Void Blue
              { from: "#051A14", to: "#0F2D24", accent: "#10b981" }, // Deep Emerald Glow
              { from: "#14050E", to: "#240E1B", accent: "#ec4899" }, // Velvet Amethyst
              { from: "#0D0D0D", to: "#1F1F1F", accent: "#EF4444" }, // High Contrast Obsidian Red
              { from: "#1E1305", to: "#321E08", accent: "#F59E0B" }  // Rich Gold Rust
            ];
            const theme = gradients[sum % gradients.length];
            
            const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${theme.from}" />
      <stop offset="100%" stop-color="${theme.to}" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%" fx="50%" fy="40%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${theme.from}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#glow)" />

  <!-- Film Framing Guidelines -->
  <rect x="20" y="20" width="360" height="560" fill="none" stroke="${theme.accent}" stroke-opacity="0.15" stroke-width="1.2" />
  <rect x="28" y="28" width="344" height="544" fill="none" stroke="white" stroke-opacity="0.06" stroke-dasharray="4,4" stroke-width="0.8" />
  
  <path d="M 190 300 L 210 300 M 200 290 L 200 310" stroke="${theme.accent}" stroke-opacity="0.3" stroke-width="1" />
  <circle cx="200" cy="300" r="15" fill="none" stroke="${theme.accent}" stroke-opacity="0.12" stroke-width="1" />

  <g transform="translate(200, 75)" text-anchor="middle">
    <text font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="${theme.accent}" letter-spacing="4" opacity="0.9">PHOENIX POST-PRODUCTION MASTER</text>
    <text font-family="system-ui, -apple-system, sans-serif" font-size="6.5" font-weight="600" fill="white" letter-spacing="2.5" opacity="0.4" y="18">OFFICIAL DI &amp; SOUND MIX CO-PRODUCTION</text>
  </g>

  <g transform="translate(200, 270)" text-anchor="middle">
    <rect x="-160" y="-40" width="320" height="80" fill="black" fill-opacity="0.4" rx="4" stroke="white" stroke-opacity="0.05" stroke-width="1" />
    <text font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="950" fill="white" letter-spacing="0.5" y="5" text-anchor="middle">
      ${cleanTitle.toUpperCase()}
    </text>
    <text font-family="'Courier New', monospace" font-size="7.5" font-weight="bold" fill="${theme.accent}" letter-spacing="3" y="26" opacity="0.85">STUDIO CERTIFICATE MASTER</text>
  </g>

  <g transform="translate(45, 500)" font-family="'Courier New', monospace" font-size="7" fill="white" opacity="0.45" letter-spacing="1.2">
    <text x="0" y="0">AUDIO  : DOLBY ATMOS 7.1.4 MIX</text>
    <text x="0" y="14">COLOR  : DCI-P3 REC 709 DIGITAL INTERMEDIATE</text>
    <text x="0" y="28">STATUS : PRODUCTION CONFORMED &amp; SIGNED</text>
  </g>

  <g transform="translate(200, 560)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="7.5" font-weight="800" fill="white" letter-spacing="2" opacity="0.45">AAA PHOENIX STUDIOS</text>
  </g>
</svg>
`;
            return res.send(svg);
          } else {
            // Serve a beautiful team avatar or gallery placeholder
            res.setHeader("Content-Type", "image/svg+xml");
            if (req.method === "HEAD") {
              return res.status(200).end();
            }
            const initials = cleanTitle
              .split(" ")
              .map((w) => w[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();
            const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#121212" />
  <circle cx="150" cy="150" r="100" fill="#FC8019" opacity="0.1" />
  <circle cx="150" cy="150" r="75" fill="none" stroke="#FC8019" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="4,4" />
  <text x="150" y="168" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#FC8019" text-anchor="middle" letter-spacing="1">${initials}</text>
  <text x="150" y="245" font-family="'Courier New', monospace" font-size="9" font-weight="bold" fill="white" opacity="0.6" text-anchor="middle" letter-spacing="2">${cleanTitle.toUpperCase()}</text>
</svg>
`;
            return res.send(svg);
          }
        }
      } catch (err) {
        console.error("Middleware fallback generator error", err);
      }
    } else if (isProjectRequest) {
      // Robust absolute fallback for deleted/missing project images!
      const cleanTitle = normalizeFilename(filename);
      res.setHeader("Content-Type", "image/svg+xml");
      if (req.method === "HEAD") {
        return res.status(200).end();
      }

      let sum = 0;
      for (let i = 0; i < cleanTitle.length; i++) sum += cleanTitle.charCodeAt(i);
      const gradients = [
        { from: "#121214", to: "#1B1B1E", accent: "#FC8019" }, // Slate Amber
        { from: "#0B0F19", to: "#111827", accent: "#38bdf8" }, // Cool Void Blue
        { from: "#051A14", to: "#0F2D24", accent: "#10b981" }, // Deep Emerald Glow
        { from: "#14050E", to: "#240E1B", accent: "#ec4899" }, // Velvet Amethyst
        { from: "#0D0D0D", to: "#1F1F1F", accent: "#EF4444" }, // High Contrast Obsidian Red
        { from: "#1E1305", to: "#321E08", accent: "#F59E0B" }  // Rich Gold Rust
      ];
      const theme = gradients[sum % gradients.length];
      
      const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${theme.from}" />
      <stop offset="100%" stop-color="${theme.to}" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%" fx="50%" fy="40%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${theme.from}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#glow)" />

  <!-- Film Framing Guidelines -->
  <rect x="20" y="20" width="360" height="560" fill="none" stroke="${theme.accent}" stroke-opacity="0.15" stroke-width="1.2" />
  <rect x="28" y="28" width="344" height="544" fill="none" stroke="white" stroke-opacity="0.06" stroke-dasharray="4,4" stroke-width="0.8" />
  
  <path d="M 190 300 L 210 300 M 200 290 L 200 310" stroke="${theme.accent}" stroke-opacity="0.3" stroke-width="1" />
  <circle cx="200" cy="300" r="15" fill="none" stroke="${theme.accent}" stroke-opacity="0.12" stroke-width="1" />

  <g transform="translate(200, 75)" text-anchor="middle">
    <text font-family="'Courier New', monospace" font-size="8" font-weight="900" fill="${theme.accent}" letter-spacing="4" opacity="0.9">PHOENIX POST-PRODUCTION MASTER</text>
    <text font-family="system-ui, -apple-system, sans-serif" font-size="6.5" font-weight="600" fill="white" letter-spacing="2.5" opacity="0.4" y="18">OFFICIAL DI &amp; SOUND MIX CO-PRODUCTION</text>
  </g>

  <g transform="translate(200, 270)" text-anchor="middle">
    <rect x="-160" y="-40" width="320" height="80" fill="black" fill-opacity="0.4" rx="4" stroke="white" stroke-opacity="0.05" stroke-width="1" />
    <text font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="950" fill="white" letter-spacing="0.5" y="5" text-anchor="middle">
      ${cleanTitle.toUpperCase()}
    </text>
    <text font-family="'Courier New', monospace" font-size="7.5" font-weight="bold" fill="${theme.accent}" letter-spacing="3" y="26" opacity="0.85">STUDIO CERTIFICATE MASTER</text>
  </g>

  <g transform="translate(45, 500)" font-family="'Courier New', monospace" font-size="7" fill="white" opacity="0.45" letter-spacing="1.2">
    <text x="0" y="0">AUDIO  : DOLBY ATMOS 7.1.4 MIX</text>
    <text x="0" y="14">COLOR  : DCI-P3 REC 709 DIGITAL INTERMEDIATE</text>
    <text x="0" y="28">STATUS : PRODUCTION CONFORMED &amp; SIGNED</text>
  </g>

  <g transform="translate(200, 560)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="7.5" font-weight="800" fill="white" letter-spacing="2" opacity="0.45">AAA PHOENIX STUDIOS</text>
  </g>
</svg>
`;
      return res.send(svg);
    }
    next();
  });

  // Serve static assets out of the root /public folder with robust 1-day caching
  app.use(express.static(PUBLIC_PATH, {
    maxAge: "24h",
    etag: true,
    lastModified: true
  }));

  // Helper utility to clean filenames for human display title
  function normalizeFilename(filename: string): string {
    const base = path.basename(filename, path.extname(filename));
    return base
      .replace(/[-_]+/g, " ")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // API Endpoint: Upload base64 image and save to public folder
  app.post("/api/upload", (req, res) => {
    try {
      const { dataUrl, filename, folder } = req.body;
      if (!dataUrl || !filename || !folder) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
      
      // Ensure the folder exists and is within MEDIA_DIRS
      if (!MEDIA_DIRS.includes(folder)) {
        return res.status(400).json({ success: false, message: "Invalid target folder" });
      }

      // Convert dataUrl (base64) to buffer
      const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(400).json({ success: false, message: "Invalid base64 data" });
      }

      const imageBuffer = Buffer.from(matches[2], "base64");
      const targetPath = path.join(PUBLIC_PATH, folder, filename);

      fs.writeFileSync(targetPath, imageBuffer);
      
      return res.json({ success: true, url: `/${folder}/${filename}`, filename });
    } catch (error) {
      console.error("Upload error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // API Endpoint: Dynamic media file-system inventory engine (Runs on-demand)
  app.get("/api/media-inventory", (req, res) => {
    try {
      const inventory: Record<string, any> = {};

      // 1. Scan /public/team/
      const teamPath = path.join(PUBLIC_PATH, "team");
      const teamFiles = fs.existsSync(teamPath)
        ? fs.readdirSync(teamPath).filter((f) => {
            const ext = path.extname(f).toLowerCase();
            return [".jpg", ".jpeg", ".png", ".webp"].includes(ext) && fs.statSync(path.join(teamPath, f)).isFile();
          })
        : [];
      inventory.team = teamFiles;

      // 2. Scan /public/studio/
      const studioPath = path.join(PUBLIC_PATH, "studio");
      const studioFiles = fs.existsSync(studioPath)
        ? fs.readdirSync(studioPath).filter((f) => {
            const ext = path.extname(f).toLowerCase();
            return [".jpg", ".jpeg", ".png", ".webp"].includes(ext) && fs.statSync(path.join(studioPath, f)).isFile();
          })
        : [];
      inventory.studio = studioFiles;

      // 3. Scan /public/projects/
      const projectsPath = path.join(PUBLIC_PATH, "projects");
      const projectsFiles = fs.existsSync(projectsPath)
        ? fs.readdirSync(projectsPath).filter((f) => {
            const ext = path.extname(f).toLowerCase();
            return [".jpg", ".jpeg", ".png", ".webp"].includes(ext) && fs.statSync(path.join(projectsPath, f)).isFile();
          })
        : [];
      inventory.projects = projectsFiles;

      // 4. Scan /public/platforms/
      const platformsPath = path.join(PUBLIC_PATH, "platforms");
      const platformsFiles = fs.existsSync(platformsPath)
        ? fs.readdirSync(platformsPath).filter((f) => {
            const ext = path.extname(f).toLowerCase();
            return [".jpg", ".jpeg", ".png", ".webp"].includes(ext) && fs.statSync(path.join(platformsPath, f)).isFile();
          })
        : [];
      inventory.platforms = platformsFiles;

      // 5. Scan /public/hero/
      const heroPath = path.join(PUBLIC_PATH, "hero");
      const heroFiles = fs.existsSync(heroPath)
        ? fs.readdirSync(heroPath).filter((f) => fs.statSync(path.join(heroPath, f)).isFile())
        : [];
      inventory.hero = {
        video: heroFiles.find((f) => f.toLowerCase() === "hero-video.mp4") || null,
        image: heroFiles.find((f) => f.toLowerCase() === "hero-image.jpg") || null,
        files: heroFiles,
      };

      // 6. Scan /public/gallery/ inside subfolders recursively for category categorization
      const galleryPath = path.join(PUBLIC_PATH, "gallery");
      const galleryItems: { id: string; category: string; imageUrl: string; title: string; description: string; filename: string }[] = [];

      if (fs.existsSync(galleryPath)) {
        const rootItems = fs.readdirSync(galleryPath);
        rootItems.forEach((item, index) => {
          const fullItemPath = path.join(galleryPath, item);
          const stat = fs.statSync(fullItemPath);

          if (stat.isDirectory()) {
            // Folder name maps directly to the Category tag
            const category = item;
            const subfiles = fs.readdirSync(fullItemPath).filter((f) => {
              const ext = path.extname(f).toLowerCase();
              return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
            });
            
            subfiles.forEach((file, fileIdx) => {
              galleryItems.push({
                id: `dynamic-gal-${category.replace(/\s+/g, "-").toLowerCase()}-${fileIdx}`,
                category: category,
                imageUrl: `/gallery/${category}/${file}`,
                title: normalizeFilename(file),
                description: `Calibrated high-definition visual capture in ${category} zone.`,
                filename: file,
              });
            });
          } else {
            // Flat root level file inside /gallery/
            const ext = path.extname(item).toLowerCase();
            if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
              galleryItems.push({
                id: `dynamic-gal-root-${index}`,
                category: "General Snapshot",
                imageUrl: `/gallery/${item}`,
                title: normalizeFilename(item),
                description: "Vibrant snapshot of AAA Phoenix film production facilities.",
                filename: item,
              });
            }
          }
        });
      }

      inventory.gallery = galleryItems;

      res.json({ success: true, inventory });
    } catch (err: any) {
      console.error("Error generating local media inventory", err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Serve Vite app client dev middleware or production bundle files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    // Cache built CSS/JS assets (which are content-hashed) for up to 1 year
    app.use(express.static(distPath, {
      maxAge: "365d",
      immutable: true,
      fallthrough: true
    }));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[AAA PHOENIX CMS SERVER] Active on http://localhost:${PORT}`);
  });
}

startServer();
