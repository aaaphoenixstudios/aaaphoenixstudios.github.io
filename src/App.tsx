/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CmsData } from "./types";
import { defaultCmsData } from "./data/defaultData";

// Global Frame Widgets & Layout Pieces
import Loader from "./components/Loader";
import GlowCursor from "./components/GlowCursor";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Dedicated Premium 7 Pages
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import WorkPage from "./components/WorkPage";
import StudioPage from "./components/StudioPage";
import TeamPage from "./components/TeamPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [mediaInventory, setMediaInventory] = useState<any>(null);

  // Fetch dynamic media files on load to combine directory status
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch("/api/media-inventory");
        const json = await res.json();
        if (json && json.success) {
          setMediaInventory(json.inventory);
        }
      } catch (e) {
        console.error("Unable to query server media files:", e);
      }
    };
    fetchInventory();
  }, []);

  // Compute merged CMS Data combining filesystem inventory with text configurations
  const activeCmsData = useMemo<CmsData>(() => {
    const filterBannedMembers = (list: any[]) => {
      return list.filter(m => {
        const lowerName = (m.name || "").toLowerCase();
        return !lowerName.includes("sarah sterling") && 
               !lowerName.includes("aris thore") && 
               !lowerName.includes("aris thorne") && 
               !lowerName.includes("elena rostova") &&
               !lowerName.includes("marcus phoenix") &&
               !lowerName.includes("marcus pheonix");
      });
    };

    if (!mediaInventory) {
      return {
        ...defaultCmsData,
        team: filterBannedMembers(defaultCmsData.team),
      };
    }

    const updated = { ...defaultCmsData };

    // 1. Team members list mapping
    const currentTeam = [...(defaultCmsData.team || [])];
    const originalPhotoMap: Record<string, string> = {
      "tm-1": "founders",
      "tm-3": "vidhan",
      "tm-4": "shashank",
      "tm-5": "pradeep",
      "tm-6": "shantosh",
      "tm-7": "swapnik",
      "tm-8": "ravi"
    };

    mediaInventory.team.forEach((file: string) => {
      const baseName = file.replace(/\.[^/.]+$/, "");
      const normalizedName = baseName.replace(/[-_]+/g, " ")
        .trim()
        .split(" ")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      const exists = currentTeam.some((m) => 
        m.name.toLowerCase() === normalizedName.toLowerCase() ||
        m.name.toLowerCase().includes(normalizedName.toLowerCase()) ||
        (originalPhotoMap[m.id] && baseName.toLowerCase().includes(originalPhotoMap[m.id].toLowerCase())) ||
        (m.photo && m.photo.toLowerCase().includes(file.toLowerCase()))
      );

      if (!exists) {
        currentTeam.push({
          id: `dyn-team-${baseName}`,
          name: normalizedName,
          department: "SPECIALISTS",
          position: "Post Production Specialist",
          photo: `/team/${file}`,
          summary: `${normalizedName} is a verified post-production professional, conformed directly into our digital workflow.`,
          experience: "5+ Years Professional Practice"
        });
      } else {
        const idx = currentTeam.findIndex((m) => 
          m.name.toLowerCase() === normalizedName.toLowerCase() ||
          m.name.toLowerCase().includes(normalizedName.toLowerCase()) ||
          (originalPhotoMap[m.id] && baseName.toLowerCase().includes(originalPhotoMap[m.id].toLowerCase())) ||
          (m.photo && m.photo.toLowerCase().includes(file.toLowerCase()))
        );
        if (idx !== -1) {
          const currentPhoto = currentTeam[idx].photo || "";
          const isUnsplash = currentPhoto.includes("unsplash.com");
          const isExplicitLink = currentPhoto.startsWith("http") || currentPhoto.startsWith("data:");
          const currentPhotoFile = currentPhoto.split("/").pop() || "";
          const isMissingLocalFile = !isExplicitLink && !mediaInventory.team.includes(currentPhotoFile);

          if (!currentPhoto || isUnsplash || isMissingLocalFile) {
            currentTeam[idx] = {
              ...currentTeam[idx],
              photo: `/team/${file}`
            };
          }
        }
      }
    });
    updated.team = currentTeam;

    // 2. Portfolio Projects mapping
    const currentProjects = [...(defaultCmsData.projects || [])];
    mediaInventory.projects.forEach((file: string) => {
      const baseName = file.replace(/\.[^/.]+$/, "");
      const normalizedName = baseName.replace(/[-_]+/g, " ")
        .trim()
        .split(" ")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      const exists = currentProjects.some((p) => 
        p.name.toLowerCase() === normalizedName.toLowerCase() ||
        p.poster.toLowerCase().includes(file.toLowerCase())
      );

      if (!exists) {
        currentProjects.push({
          id: `dyn-prj-${baseName}`,
          name: normalizedName,
          category: "EDITORIAL DEPARTMENT",
          year: 2026,
          poster: file,
          videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
          director: "Studio Specialist",
          role: "Creative Finish & Conforming",
          platform: "Theatrical / Streaming",
          overview: `${normalizedName} is a premium cinematic project conformed natively across our certified high-performance post-production suites.`
        });
      } else {
        const idx = currentProjects.findIndex((p) => 
          p.name.toLowerCase() === normalizedName.toLowerCase() ||
          p.poster.toLowerCase().includes(file.toLowerCase())
        );
        if (idx !== -1) {
          const currentPoster = currentProjects[idx].poster || "";
          const isUnsplash = currentPoster.includes("unsplash.com");
          const isExplicitLink = currentPoster.startsWith("http") || currentPoster.startsWith("data:");
          const currentPosterFile = currentPoster.split("/").pop() || "";
          const isMissingLocalFile = !isExplicitLink && !mediaInventory.projects.includes(currentPosterFile);

          if (!currentPoster || isUnsplash || isMissingLocalFile) {
            currentProjects[idx] = {
              ...currentProjects[idx],
              poster: file
            };
          }
        }
      }
    });
    updated.projects = currentProjects;

    // 3. Assemble Gallery & Studio items
    let currentGallery = [...mediaInventory.gallery];
    
    // Map of expected studio files to preset categories
    const studioCategoryMap: Record<string, string> = {
      "editing-suite.jpg": "Editing Suites",
      "di-room.jpg": "DI Color Grading Rooms",
      "color-room.jpg": "DI Color Grading Rooms",
      "dolby-atmos.jpg": "Dolby Atmos Studio",
      "sound-design-room.jpg": "Sound Design Room",
      "dubbing-theatre.jpg": "Dubbing Theatre",
      "client-lounge.jpg": "Client Lounge",
      "preview-theatre.jpg": "Preview Theatre",
      "production-floor.jpg": "Production Floor",
      "behind-scenes.jpg": "Behind The Scenes"
    };

    mediaInventory.studio.forEach((file: string) => {
      const category = studioCategoryMap[file.toLowerCase()] || "General Snapshot";
      const baseName = file.replace(/\.[^/.]+$/, "");
      const title = baseName.replace(/[-_]+/g, " ")
        .trim()
        .split(" ")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      let imageUrl = `/studio/${file}`;
      if (file.toLowerCase() === "di-room.jpg") imageUrl = "/DiRoom.png";
      if (file.toLowerCase() === "editing-suite.jpg") imageUrl = "/EditingSuite.jpg.jpeg";
      if (file.toLowerCase() === "behind-scenes.jpg") imageUrl = "/Behindthescenes.jpg.jpeg";

      const exists = currentGallery.some((item) => item.imageUrl === imageUrl);
      if (!exists) {
        currentGallery.push({
          id: `studio-file-${baseName}`,
          category: category,
          imageUrl: imageUrl,
          title: title,
          description: `Certified high-fidelity ${category} environment captured live.`
        });
      }
    });

    if (currentGallery.length === 0) {
      currentGallery = defaultCmsData.gallery || [];
    }
    updated.gallery = currentGallery;

    // 4. Hero configurations
    if (mediaInventory.hero) {
      if (mediaInventory.hero.video) {
        updated.heroVideoUrl = `/hero/${mediaInventory.hero.video}`;
      } else {
        updated.heroVideoUrl = "";
      }
      if (mediaInventory.hero.image) {
        updated.aboutImage = `/hero/${mediaInventory.hero.image}`;
      }
    }

    // Filter out banned members
    updated.team = filterBannedMembers(updated.team || []);

    return updated;
  }, [mediaInventory]);

  return (
    <>
      {/* 1. Golden Phoenix Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Interactive Spotlight/Cinema Beam Cursor following */}
      <GlowCursor />

      {/* Main Website Canvas (Unveiled after loader completes) */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen bg-[#FAF7F2] text-[#1C1C1C] font-sans overflow-x-hidden selection:bg-[#FC8019] selection:text-white"
        >
          {/* Top Navbar */}
          <Header
            companyName={activeCmsData.companyName}
            currentPage={currentPage}
            onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          {/* Dedicated Sub-page Render with transition animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentPage === "home" && (
                <HomePage
                  cmsData={activeCmsData}
                  onNavigate={(page) => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              )}
              {currentPage === "about" && (
                <AboutPage cmsData={activeCmsData} />
              )}
              {currentPage === "services" && (
                <ServicesPage cmsData={activeCmsData} />
              )}
              {currentPage === "work" && (
                <WorkPage cmsData={activeCmsData} />
              )}
              {currentPage === "studio" && (
                <StudioPage cmsData={activeCmsData} />
              )}
              {currentPage === "team" && (
                <TeamPage cmsData={activeCmsData} />
              )}
              {currentPage === "contact" && (
                <ContactPage cmsData={activeCmsData} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer shared across pages */}
          <Footer
            companyName={activeCmsData.companyName}
            onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </motion.div>
      )}
    </>
  );
}

