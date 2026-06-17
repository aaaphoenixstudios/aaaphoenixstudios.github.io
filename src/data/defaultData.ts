import { CmsData } from "../types";

export const defaultCmsData: CmsData = {
  companyName: "AAA PHOENIX POST PRODUCTION",
  heroTagline: "PREMIUM FILM POST PRODUCTION",
  heroHeading: "WHERE STORIES MATTER",
  heroSubheading: "Digital Intermediate, Dolby Atmos Mixing, VFX, Editing, and OTT Mastering for Feature Films, Web Series, and Global Commercials.",
  heroVideoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165&oauth2_token_id=57447761", // Sleek cinematic film reel / camera footage
  aboutTitle: "Crafting Cinematic Excellence Since Day One",
  aboutText: "Founded in 2016 in the heart of the film district, AAA Phoenix Post Production Studio has grown into an internationally recognized titan of storytelling. Over the last decade, we have partnered with master filmmakers, visionary directors, and major streaming networks to bring their creative visions to the silver screen.",
  aboutImage: "/officephoto25.jpeg", // Premium camera on movie set shot
  stats: {
    projects: 540,
    awards: 52,
    clients: 124,
    years: 10
  },
  services: [
    {
      id: "srv-1",
      title: "Digital Intermediate",
      description: "State-of-the-art DI workflows conforming raw camera masters to high-fidelity files with seamless color management pipelines.",
      details: "Our proprietary DI pipeline is tuned to conform complex multi-cam camera bundles (Arri-RAW, REDCODE, Sony OC-3) into a unified high-bitrate canvas, adhering to strict Rec.2020, DCI-P3, and HDR standards.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      iconName: "Tv"
    },
    {
      id: "srv-2",
      title: "Color Grading",
      description: "Atmospheric, mood-driven color correction in our premium DCI-compliant projection theatres powered by DaVinci Resolve.",
      details: "Collaborate of premier colorists utilizing dual 4K Christie Laser Laser Projectors and advanced grading panels. We craft custom LUTs and design distinct visual aesthetics that reinforce narrative depth.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      iconName: "Palette"
    },
    {
      id: "srv-3",
      title: "Dolby Atmos Mixing",
      description: "Immersive soundscapes designed and mixed in our certified Dolby Atmos® Home and Theatrical audio suites.",
      details: "Equipped with a custom-calibrated 7.1.4 PMC and Genelec speaker array, Avid S6 control surfaces, and master Pro Tools software, we engineer immersive and emotionally moving multi-dimensional auditory worlds.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      iconName: "Volume2"
    },
    {
      id: "srv-4",
      title: "Editing",
      description: "Offline and online narrative assembly tailored to pacing, emotion, and dramatic tension by master editors.",
      details: "Our offline suites provide high-speed servers with immediate hardware rendering access. Master editors map out perfect story pacing, maintaining complete structural alignment from rough cuts to absolute picture lock.",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80",
      iconName: "Scissors"
    },
    {
      id: "srv-5",
      title: "VFX & Compositing",
      description: "Photorealistic CGI, matte paintings, dynamic simulations, and seamless environment paint-outs.",
      details: "From digital background replacements to world-building procedural simulations, our visual effects artists craft micro-precise visual integrations that feel completely organic and visually indistinguishable from raw capture.",
      image: "https://images.unsplash.com/photo-1504701954957-2390f806e9f4?auto=format&fit=crop&w=800&q=80",
      iconName: "Sparkles"
    },
    {
      id: "srv-6",
      title: "OTT Mastering",
      description: "Multi-deliverable IMF packages and QC-passed masters conforming to Netflix, Apple TV, Prime, and Disney+ specs.",
      details: "We ensure flawless, stress-free compliance with worldwide streaming distribution mandates, delivering pixel-perfect Luma/Chroma metadata, multi-language Dolby Vision mastering, and Dolby Atmos audio packages.",
      image: "https://images.unsplash.com/photo-1478720143022-385f704a3b7a?auto=format&fit=crop&w=800&q=80",
      iconName: "FileVideo"
    }
  ],
  showcase: [
    {
      id: "show-1",
      title: "DaVinci DI Theatre 1",
      category: "DI Theatre",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80",
      description: "A premier 30-seat screening lounge equipped with a HDR4000 monitor and master laser projectors.",
      equipment: ["4K Christie Laser Projector", "DaVinci Resolve Advanced Panel", "DCI-P3 & Rec.2020 calibrated", "Acoustic treatment by Munro Acoustics"]
    },
    {
      id: "show-2",
      title: "Dolby Certified Atmos Sound Arena",
      category: "Sound Mixing Theatre",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1000&q=80",
      description: "Certified 7.2.4 spatial sound theater designed for ultimate surround fidelity and mix precision.",
      equipment: ["Pro Tools Ultimate & HDX cards", "Avid S6 Dual Operators desk", "Munro calibrated PMC Speaker layout", "Dolby hardware RMUs"]
    },
    {
      id: "show-3",
      title: "VFX Compositing Bay 4",
      category: "VFX Department",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      description: "Our dedicated node-room housing blazing-fast rendering pipelines and Unreal Engine real-time workstations.",
      equipment: ["Dual AMD Threadrippers (128 Cores)", "Quadro RTX 6000 Graphics", "OLED grading-confidence panel", "10GbE network pipeline"]
    },
    {
      id: "show-4",
      title: "Narrative Assembly Suite A",
      category: "Editing Suites",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      description: "Cozy editing suite optimized for long creative design sessions with visual comfort features.",
      equipment: ["Adobe Creative Suite & Avid Composer", "Ergonomic steelcase chairs", "Dual-calibrated BenQ mastering screens", "Direct access to 4PB fiber SAN server"]
    },
    {
      id: "show-5",
      title: "Private Screen Theatre",
      category: "Preview Theatre",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
      description: "Luxe 12-seat preview studio perfect for client sign-offs, directors and producers' previews.",
      equipment: ["Dolby Vision HDR cinema display", "Plush luxury Italian recliners", "Calibrated 5.1 surrounds", "Secure encrypted playback console"]
    },
    {
      id: "show-6",
      title: "Mobile Grading Workstation",
      category: "Workstations",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
      description: "Fast-deployment digital workflow cart for on-set color correction directly from raw video capture.",
      equipment: ["Precision Mac Studio M2 Ultra", "EIZO ColorEdge Confidence Screen", "DaVinci Micro Panel", "LTO Tape Backup hardware"]
    }
  ],
  projects: [
    {
      id: "prj-color-siblings",
      name: "Siblings",
      category: "COLOR DEPARTMENT",
      year: 2025,
      poster: "Siblings.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Rocky Rodriguez Jr.",
      role: "Digital Intermediate & Master Color Styling",
      platform: "Theatrical / Selected Festivals",
      genre: "Art House / Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Festival Ensembles"],
      overview: "Finely stylized color aesthetics, utilizing customized film emulations and warm luma balances in an ACES calibrated grading space. Graded on our state-of-the-art DaVinci panels.",
      gallery: ["Siblings.jpeg"]
    },
    {
      id: "prj-color-10-days-apart",
      name: "10 Days Apart",
      category: "COLOR DEPARTMENT",
      year: 2026,
      poster: "10-Days-Apart.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Anjan Kommineni",
      role: "Digital Intermediate Color Grading & HDR Mastering",
      platform: "Theatrical / Selected Festivals",
      genre: "Drama / Cinema",
      imdbUrl: "https://www.imdb.com",
      cast: ["Ensembles"],
      overview: "A visually sublime feature marked by soft contrast and high dynamic range precision. Color graded entirely in DaVinci Resolve by Vidhan Bommalla to capture the nuanced shifting of autumn hues.",
      gallery: ["10-Days-Apart.jpeg"]
    },

    // ==========================================
    // EDITORIAL DEPARTMENT
    // ==========================================
    {
      id: "prj-edit-arjun-reddy",
      name: "Arjun Reddy",
      category: "EDITORIAL DEPARTMENT",
      year: 2017,
      poster: "Arjun-Reddy.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Sandeep Reddy Vanga",
      role: "Main Narrative Editorial, Pacing Adjustment, & Master Sequence Assembly",
      platform: "Theatrical / Disney+ Hotstar / Prime Video",
      genre: "Drama / Romance / Action",
      imdbUrl: "https://www.imdb.com/title/tt7294514/",
      cast: ["Vijay Deverakonda", "Shalini Pandey", "Rahul Ramakrishna"],
      overview: "The iconic modern cinematic masterpiece. We crafted the intense, high-impact emotional narrative pacing, sound overlap conforming, and master sequence assembly.",
      gallery: ["Arjun-Reddy.jpeg"]
    },
    {
      id: "prj-edit-8-vasanthalu",
      name: "8 Vasanthalu",
      category: "EDITORIAL DEPARTMENT",
      year: 2025,
      poster: "8-Vasanthalu.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Phanindra Narsetti",
      role: "Master Offline Editing & Dramatic Narrative Pacing",
      platform: "Theatrical Releases",
      genre: "Drama / Anthology",
      imdbUrl: "https://www.imdb.com",
      cast: ["Anthology Ensemble"],
      overview: "A poetic structural chronicle of eight seasons. Highly refined emotional pacing and seamless chronological cutting handled in our custom high-speed offline bays.",
      gallery: ["8-Vasanthalu.jpeg"]
    },
    {
      id: "prj-edit-sahakutumbaanam",
      name: "Sahakutumbaanam",
      category: "EDITORIAL DEPARTMENT",
      year: 2025,
      poster: "Sahakutumbaanam.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Sharma Uday",
      role: "Lead Offline Editing & Continuity Conformance",
      platform: "Theatrical / OTT Platforms",
      genre: "Family Drama / Slice of Life",
      imdbUrl: "https://www.imdb.com",
      cast: ["Ensemble Cast"],
      overview: "A heartwarming dramatic family dynamic cut with precise emotional rhythms, character alignment, and beautiful multi-cam continuity balances.",
      gallery: ["Sahakutumbaanam.jpeg"]
    },
    {
      id: "prj-edit-gamblers",
      name: "Gamblers",
      category: "EDITORIAL DEPARTMENT",
      year: 2025,
      poster: "Gamblers.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "K.S.K. Chaitanya",
      role: "High-Octane Dynamic Suspense Assembly",
      platform: "Cinema Release / Streaming",
      genre: "Crime / Suspense / Thriller",
      imdbUrl: "https://www.imdb.com",
      cast: ["Key Cast Elements"],
      overview: "A fast-paced psychological heist film requiring rapid parallel editing structures, non-linear flashback sequences, and high-impact visual design pacing.",
      gallery: ["Gamblers.jpeg"]
    },
    {
      id: "prj-edit-marakkuma-nenjam",
      name: "Marakkuma Nenjam",
      category: "EDITORIAL DEPARTMENT",
      year: 2024,
      poster: "Marakkuma-Nenjam.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Raako. Yogandran",
      role: "Lead Narrative Conforming & Pacing Editor",
      platform: "Theatrical Release",
      genre: "Coming of Age / Romance / Nostalgia",
      imdbUrl: "https://www.imdb.com",
      cast: ["Nostalgic Cast Ensembles"],
      overview: "Delicate and nostalgic storytelling conformed with frame-perfect precision to support poetic, evocative cinematography and sentimental character arcs.",
      gallery: ["Marakkuma-Nenjam.jpeg"]
    },
    {
      id: "prj-edit-kanulu-therichinaa",
      name: "Kanulu Therichinaa Kanulu Moosinaa",
      category: "EDITORIAL DEPARTMENT",
      year: 2023,
      poster: "Kanulu-Therichinaa-Kanulu-Moosinaa.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Sandeep Reddy K.T.",
      role: "Narrative Assembly & Flow Optimization",
      platform: "Selected Regional Theatres / OTT",
      genre: "Romantic Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Leading Performers"],
      overview: "Intimate and sensitive drama matching intense dialogue sequences with slow, emotional close-ups and beautiful visual flow sequences.",
      gallery: ["Kanulu-Therichinaa-Kanulu-Moosinaa.jpeg"]
    },
    {
      id: "prj-edit-geometry-box",
      name: "Geometry Box",
      category: "EDITORIAL DEPARTMENT",
      year: 2022,
      poster: "Geometry-Box.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Sainath Ponna",
      role: "Chief Creative Editor & Structural Layout",
      platform: "Independent Festival circuit",
      genre: "Experimental / Conceptual",
      imdbUrl: "https://www.imdb.com",
      cast: ["Unconventional Performers"],
      overview: "An experimental, avant-garde puzzle film calling for extremely creative transition design, physical layout cuts, and symbolic visual formatting.",
      gallery: ["Geometry-Box.jpeg"]
    },
    {
      id: "prj-edit-36-farmhouse",
      name: "36 Farmhouse",
      category: "EDITORIAL DEPARTMENT",
      year: 2022,
      poster: "36-Farmhouse.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Ram Ramesh Sharma",
      role: "Full-Length Feature Assembly & Comedy Timing",
      platform: "Zee5 Premium",
      genre: "Comedy / Mystery / Drama",
      imdbUrl: "https://www.imdb.com/title/tt16616056/",
      cast: ["Sanjay Mishra", "Amol Parashar", "Barkha Singh"],
      overview: "Subhash Ghai's crime comedy mystery set inside a luxurious farmhouse. We conformed intricate comedic subplots and timing overlaps with brilliant structural cadence.",
      gallery: ["36-Farmhouse.jpeg"]
    },
    {
      id: "prj-edit-cocktail-diaries",
      name: "Cocktail Diaries",
      category: "EDITORIAL DEPARTMENT",
      year: 2019,
      poster: "Cocktail-Diaries.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Sai Ram Palley",
      role: "Lead Narrative Conformer & Dialogue Syncer",
      platform: "SillyMonks Play",
      genre: "Drama / Comedy / Urban Life",
      imdbUrl: "https://www.imdb.com",
      cast: ["Urban Ensemble"],
      overview: "Snappy, fast-conversational urban content cut and conformed for digital platforms with highly dynamic tracking sequences.",
      gallery: ["Cocktail-Diaries.jpeg"]
    },
    {
      id: "prj-edit-veera-bhoga",
      name: "Veera Bhoga Vasantha Rayalu",
      category: "EDITORIAL DEPARTMENT",
      year: 2018,
      poster: "Veera-Bhoga-Vasantha-Rayalu.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "R. Indrasena",
      role: "Multi-Linear Narrative Conform & Sequence Assembly",
      platform: "Theatrical releases / OTT",
      genre: "Mystery / Thriller / Non-Linear",
      imdbUrl: "https://www.imdb.com/title/tt7136080/",
      cast: ["Nara Rohit", "Sudheer Babu", "Shriya Saran"],
      overview: "An complex, high-intensity multi-threaded psychological thriller requiring frame-accurate puzzle cuts and intense matching visual action plates.",
      gallery: ["Veera-Bhoga-Vasantha-Rayalu.jpeg"]
    },
    {
      id: "prj-edit-aithey-2",
      name: "Aithey 2.0",
      category: "EDITORIAL DEPARTMENT",
      year: 2018,
      poster: "Aithe-2.0.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Raj Madiraju",
      role: "Cyber Crime Tech Thriller Layout Editor",
      platform: "Theatrical / Selected Channels",
      genre: "Tech Thriller / Crime",
      imdbUrl: "https://www.imdb.com/title/tt8171120/",
      cast: ["Tech Ensembles"],
      overview: "Innovative cyber-thriller capturing hacker terminals and split screen structures. Conformed meticulously to retain realistic UI cues and parallel tracks.",
      gallery: ["Aithe-2.0.jpeg"]
    },
    {
      id: "prj-edit-social-series",
      name: "Social Series",
      category: "EDITORIAL DEPARTMENT",
      year: 2017,
      poster: "Social-Series.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Shashi Sudigala",
      role: "Lead Offline Web Episode Assembly Editor",
      platform: "Viu Originals / Digital Release",
      genre: "Tech Thriller / Mystery Series",
      imdbUrl: "https://www.imdb.com",
      cast: ["Rana Daggubati", "Naveen Kasturia", "Priya Banerjee"],
      overview: "The digital web-series featuring Rana Daggubati. Fast, snappy short-form layout cuts optimized for modern digital viewer engagement and seamless dramatic arcs.",
      gallery: ["Social-Series.jpeg"]
    },
    {
      id: "prj-edit-happy-ending",
      name: "Happy Ending",
      category: "EDITORIAL DEPARTMENT",
      year: 2024,
      poster: "Happy-Ending.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Kowshik Beemidi",
      role: "Narrative Editorial assembly, conform pacing, and visual story construction",
      platform: "Aha / OTT Release",
      genre: "Drama / Romance",
      imdbUrl: "https://www.imdb.com/title/tt31102927/",
      cast: ["Ali Reza", "Yashwanth", "Apoorva"],
      overview: "A highly engaging modern urban relationship drama requiring tight non-linear pacing, clean dual-sound synchrony, and comprehensive offline scene conformance.",
      gallery: ["Happy-Ending.jpeg"]
    },
    {
      id: "prj-edit-14-days-girlfriend",
      name: "14 Days Girlfriend Intlo",
      category: "EDITORIAL DEPARTMENT",
      year: 2026,
      poster: "14-Days-Girlfriend-Intlo.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Studio Specialist",
      role: "Comedic Editorial Assembly & Dynamic Conforming",
      platform: "Prime Video",
      genre: "Comedy / Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Leading Comedy Ensembles"],
      overview: "14 Days Girlfriend Intlo is a premium cinematic project conformed natively across our certified high-performance post-production suites.",
      gallery: ["14-Days-Girlfriend-Intlo.jpeg"]
    },

    // ==========================================
    // SOUND MIXING DEPARTMENT (AND SOUND DESIGN)
    // ==========================================
    {
      id: "prj-sound-sri-chidambaram",
      name: "Sri Chidambaram",
      category: "SOUND MIXING DEPARTMENT",
      year: 2026,
      poster: "sri_chidambaram.jpg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Vinay Ratnam",
      role: "Immersive Environmental Sound Design & Spatial Placements",
      platform: "Theatrical Release",
      genre: "Drama / Spiritual / Aesthetic",
      imdbUrl: "https://www.imdb.com",
      cast: ["Spritual Ensembles"],
      overview: "Epic visual saga where we developed dynamic spiritual acoustic fields, using organic spatial panning in our premier certified Dolby 7.1.4 Atmos stage.",
      gallery: ["sri_chidambaram.jpg"]
    },
    {
      id: "prj-sound-jigris",
      name: "Jigris",
      category: "SOUND MIXING DEPARTMENT",
      year: 2025,
      poster: "JIGRIS.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Harish Reddy Uppula",
      role: "Atmospheric Sound Design & Dialogue Clarity Mastering",
      platform: "Theatrical Release",
      genre: "Action / Friendship / Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Friendship Ensembles"],
      overview: "Deep urban soundscapes built with multi-layered high-frequency foley designs to capture real energetic cityscape interactions.",
      gallery: ["JIGRIS.jpeg"]
    },
    {
      id: "prj-sound-anaganaga",
      name: "Anaganaga",
      category: "SOUND MIXING DEPARTMENT",
      year: 2025,
      poster: "ANAGANAGA.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Sunny Sanjay",
      role: "Ambient Acoustic Soundscape Design",
      platform: "OTT Premium",
      genre: "Folk / Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Folk Artists"],
      overview: "Traditional folklore narrative requiring natural ambient wind elements, wildlife foley textures, and soft close dialogue spatial designs.",
      gallery: ["ANAGANAGA.jpeg"]
    },
    {
      id: "prj-sound-roti-kapda",
      name: "Roti Kapda Romance",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "roti_kapda_romance.jpg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Vikram Reddy",
      role: "Dolby Surround Audio Placement & Snappy FxFoley Mix",
      platform: "Theatrical release",
      genre: "Youth Comic / Romance / Drama",
      imdbUrl: "https://www.imdb.com/title/tt33316654/",
      cast: ["Leading Youth Groups"],
      overview: "Modern romantic youth entertainer. Our Dolby Atmos audio system delivered punchy, clean nightclub beats, crisp comedic dialogue spreads, and vibrant city backgrounds.",
      gallery: ["roti_kapda_romance.jpg"]
    },
    {
      id: "prj-sound-nee-dhaarey",
      name: "Nee Dhaarey Nee Katha",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "Ne-dhaarey-Ne-katha.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Vamsi Jonalagadda",
      role: "Dual Dolby Spatial Layout & Atmospheric Mix Integration",
      platform: "Theatrical Release / OTT",
      genre: "Musical / Musical Drama",
      imdbUrl: "https://www.imdb.com/title/tt32216654/",
      cast: ["Musical Lead Artists"],
      overview: "A highly sophisticated musical feature. Swapnik Rao designed acoustic sweeps and Atmos coordinates while Santhosh Kumar Vodnala balanced the ultimate re-recording output, creating seamless sonic perfection.",
      gallery: ["Ne-dhaarey-Ne-katha.jpeg"]
    },
    {
      id: "prj-sound-saagu",
      name: "Saagu",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "Saagu.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Vinay Ratnam",
      role: "Organic Foley sound design & Cinematic EQ Balance",
      platform: "Sensational Indie Web / Film Channel",
      genre: "Heartfelt Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Indie Artists"],
      overview: "Celebrated indie film requiring delicate rural ambient textures, hand-worked agriculture sound patterns, and elegant dialogue EQ clean-ups.",
      gallery: ["Saagu.jpeg"]
    },
    {
      id: "prj-sound-mem-famous",
      name: "Mem Famous",
      category: "SOUND MIXING DEPARTMENT",
      year: 2023,
      poster: "Mem-Famous.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Sumanth Prabhas",
      role: "Atmos Sound Effects Design & Dialogue Clean-Up",
      platform: "Theatrical / Prime Video",
      genre: "Youth Comic / Rural Drama",
      imdbUrl: "https://www.imdb.com/title/tt27622954/",
      cast: ["Sumanth Prabhas", "Mani Aegurla"],
      overview: "Energetic and beloved grassroots comedy movie. We established snappy local village sound design, custom local dynamic elements, and beautiful spatial panning.",
      gallery: ["Mem-Famous.jpeg"]
    },
    {
      id: "prj-sound-8am-metro",
      name: "8 AM Metro",
      category: "SOUND MIXING DEPARTMENT",
      year: 2023,
      poster: "8-AM-Metro.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Raj Rachakonda",
      role: "Complex Subway Spatial Sound Design",
      platform: "Theatrical release / ZEE5",
      genre: "Drama / Poetry / Lifelike",
      imdbUrl: "https://www.imdb.com/title/tt21221448/",
      cast: ["Gulshan Devaiah", "Ira Dubey"],
      overview: "Poetic slow-burn narrative focusing on metropolitan subway journeys. We shaped specific acoustic resonance filters simulating steel wheels on tracks.",
      gallery: ["8-AM-Metro.jpeg"]
    },
    {
      id: "prj-sound-godari",
      name: "Godari",
      category: "SOUND MIXING DEPARTMENT",
      year: 2023,
      poster: "Godari.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Swathi Diwakar",
      role: "River Ambient Foley Design & Atmos Coordinates",
      platform: "OTT Releases",
      genre: "Traditional Drama / Slice of Life",
      imdbUrl: "https://www.imdb.com",
      cast: ["Regional Artists"],
      overview: "River Godavari themed film. Swapnik designed specialized liquid foley, flowing streams, and beautiful nature textures backdrops.",
      gallery: ["Godari.jpeg"]
    },
    {
      id: "prj-sound-good-luck",
      name: "Good Luck Sakhi",
      category: "SOUND MIXING DEPARTMENT",
      year: 2022,
      poster: "Good-Luck-Sakhi.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Nagesh Kukunoor",
      role: "Dolby Atmos Spatial Sound Design & Sports Foley",
      platform: "Theatrical release / Prime Video",
      genre: "Sports / Drama / Comedy",
      imdbUrl: "https://www.imdb.com/title/tt11311026/",
      cast: ["Keerthy Suresh", "Aadhi Pinisetty", "Jagapathi Babu"],
      overview: "Inspiring sports shooter drama where Swapnik Rao engineered high-precision bullet impact spatial coordinates and stadium surround elements.",
      gallery: ["Good-Luck-Sakhi.jpeg"]
    },
    {
      id: "prj-sound-saving-tigers",
      name: "Saving The Tigers",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "Saving-the-Tigers.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Pradeep Advaitham, Mahi V Raghav",
      role: "Complete Series Dolby Digital Mix & Re-Recording",
      platform: "Disney+ Hotstar Originals",
      genre: "Comedy / Drama Series",
      imdbUrl: "https://www.imdb.com/title/tt27506654/",
      cast: ["Priyadarshi", "Abhinav Gomatam", "Chaitanya Krishna"],
      overview: "The wildly popular Telugu comedy web series. We calibrated absolute multi-scenario family dialogues and urban environments across multiple web season timelines.",
      gallery: ["Saving-the-Tigers.jpeg"]
    },
    {
      id: "prj-sound-memu-copulam",
      name: "Memu Copulam",
      category: "SOUND MIXING DEPARTMENT",
      year: 2026,
      poster: "Memu-Copulam.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Sanjeev R.",
      role: "Theatrical Re-Recording Mixing & Foley Integration",
      platform: "Streaming Beta / Theatrical",
      genre: "Drama / Cinema",
      imdbUrl: "https://www.imdb.com",
      cast: ["Ensembles"],
      overview: "Action-packed thriller mixed in full 7.1 theatrical surround formats. Balanced high dynamic action hits, debris foley, and score integrations perfectly.",
      gallery: ["Memu-Copulam.jpeg"]
    },
    {
      id: "prj-sound-om-shanti",
      name: "Om Shanti Shanti Shantihi",
      category: "SOUND MIXING DEPARTMENT",
      year: 2025,
      poster: "Om-Shanti-Shanti-Shanti.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "A.R. Sajeev",
      role: "Acoustic Harmony Re-Recording Mix",
      platform: "Modern Digital Release",
      genre: "Devotional / Art Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Devotional Choirs"],
      overview: "Art-house production focusing on multi-layered voice loops and Vedic chants. Mixed in spatial stereo platforms to preserve organic, breath-like vocal textures.",
      gallery: ["Om-Shanti-Shanti-Shanti.jpeg"]
    },
    {
      id: "prj-sound-santhana",
      name: "Santhana Prapthirasthu",
      category: "SOUND MIXING DEPARTMENT",
      year: 2025,
      poster: "santhana-prapthirasthu.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Sanjeev Reddy",
      role: "Main Re-Recording Mixing & Stem Balance",
      platform: "Theatrical Releases",
      genre: "Social Comedy / Family",
      imdbUrl: "https://www.imdb.com",
      cast: ["Comedy Experts"],
      overview: "Family social comedy requiring clear dialogue priority, clean foley design for household events, and cozy background music integration.",
      gallery: ["santhana-prapthirasthu.jpeg"]
    },
    {
      id: "prj-sound-seetharam",
      name: "Seetharam Sitralu",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "Seetharam-Sitralu.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "D. Naga Sasidhar Reddy",
      role: " Dolby Digital Surround Mixing & Atmos Sweeps",
      platform: "Sillymonks play / YouTube",
      genre: "Intimate Village Romance",
      imdbUrl: "https://www.imdb.com",
      cast: ["Regional Leading Talents"],
      overview: "A delicate village drama. We matched subtle nature ambient cues with acoustic scoring stems using deep spatial layout systems on our Avid matrices.",
      gallery: ["Seetharam-Sitralu.jpeg"]
    },
    {
      id: "prj-sound-laggam",
      name: "Laggam",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "Laggam.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Ramesh Cheppala",
      role: "Traditional Marriage Audio Designing & Master Re-Recording",
      platform: "Theatrical Releases",
      genre: "Traditional Drama / Family / Emotional",
      imdbUrl: "https://www.imdb.com/title/tt33355524/",
      cast: ["Leading Family Ensembles"],
      overview: "A complex marriage-themed drama. Balanced dynamic traditional wedding music groups, large crowded spaces, and very sensitive tearjerker close dialogue stems.",
      gallery: ["Laggam.jpeg"]
    },
    {
      id: "prj-sound-tuk-tuk",
      name: "Tuk Tuk",
      category: "SOUND MIXING DEPARTMENT",
      year: 2025,
      poster: "Tuk-Tuk.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Supreeth C. Krishna",
      role: "Snappy Autorickshaw Surround sound FX Mixing",
      platform: "Cinema Screens / OTT",
      genre: "Comedy / Adventure / Drama",
      imdbUrl: "https://www.imdb.com",
      cast: ["Comedic Auto Artists"],
      overview: "A frantic, hilarious city adventure. We mixed continuous auto-rickshaw three-wheeler engine dynamics, vehicle chases, and surrounding city noise maps into certified Atmos outputs.",
      gallery: ["Tuk-Tuk.jpeg"]
    },
    {
      id: "prj-sound-bhamakalapam2",
      name: "Bhamakalapam 2",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "Bhamakalapam-2.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Abhimanyu Tadimeti",
      role: "Master Atmos Re-Recording Mixer",
      platform: "Aha Video Originals",
      genre: "Heist / Thriller / Comedy",
      imdbUrl: "https://www.imdb.com/title/tt31110254/",
      cast: ["Priyamani", "Sharanya Pradeep"],
      overview: "Thrilling and quirky culinary heist sequel starring Priyamani. We balanced rapid parallel dialogue tracks, chef action foley sounds, and intense background chase strings in high fidelity.",
      gallery: ["Bhamakalapam-2.jpeg"]
    },
    {
      id: "prj-sound-mishan-impossible",
      name: "Mishan Impossible",
      category: "SOUND MIXING DEPARTMENT",
      year: 2022,
      poster: "Mishan-Impossible.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Swaroop RSJ",
      role: "Atmos Sound Design, Heavy FX Placement, and Re-Recording Mix",
      platform: "Theatrical / Netflix",
      genre: "Comedy / Crime / Adventure",
      imdbUrl: "https://www.imdb.com/title/tt18398418/",
      cast: ["Taapsee Pannu", "Harsh Roshan", "Bhanu Prakshan"],
      overview: "Kid-centric fast crime comedy where we developed dynamic, engaging sonic fields in high-performance Dolby surround formats, creating immersive spatial actions.",
      gallery: ["Mishan-Impossible.jpeg"]
    },
    {
      id: "prj-sound-agent-sai",
      name: "Agent Sai Srinivasa Athreya",
      category: "SOUND MIXING DEPARTMENT",
      year: 2019,
      poster: "AgentSaiSrinivasAthreya.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Swaroop RSJ",
      role: "Dolby Atmos Theatre Re-Recording & Sound FX Mixing",
      platform: "Theatrical / Prime Video",
      genre: "Comedy / Mystery / Thriller",
      imdbUrl: "https://www.imdb.com/title/tt9198397/",
      cast: ["Naveen Polishetty", "Shruti Sharma", "Suhas"],
      overview: "We mixed Naveen Polishetty's smash hit detective thriller in Dolby Atmos 7.1.4, creating detailed environmental panning for intense mystery layouts and comedic dialogue layers.",
      gallery: ["AgentSaiSrinivasAthreya.jpeg"]
    },
    {
      id: "prj-sound-90s",
      name: "90's – A Middle Class Biopic",
      category: "SOUND MIXING DEPARTMENT",
      year: 2024,
      poster: "90'sMiddleclassbiopic.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Aditya Hasan",
      role: "Stereo Re-Recording & Multi-Language Stem Mastering",
      platform: "ETV Win Original Series",
      genre: "Nostalgic Drama / Family Series",
      imdbUrl: "https://www.imdb.com/title/tt30752496/",
      cast: ["Shivaji", "Vasuki", "Rohan"],
      overview: "The legendary, critically beloved 90s nostalgia web drama. Our mixing engineers preserved warm, authentic retro elements, acoustic scoring, and intimate family dialogues.",
      gallery: ["90'sMiddleclassbiopic.jpeg"]
    },
    {
      id: "prj-sound-psych",
      name: "Psych Siddhartha",
      category: "SOUND MIXING DEPARTMENT",
      year: 2026,
      poster: "PsychSiddhartha.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Varun Reddy",
      role: "Psychological FX Sound Design & Dolby Atmos Pacing",
      platform: "Independent Cinema Releases",
      genre: "Psychological Drama / Thriller",
      imdbUrl: "https://www.imdb.com",
      cast: ["Modern Performers"],
      overview: "Atmospheric and surreal psychological journey. We designed localized audio voices, internal heartbeat foley loops, and deep ambient room tones.",
      gallery: ["PsychSiddhartha.jpeg"]
    },
    {
      id: "prj-sound-gopi-galla",
      name: "Gopi Galla Goa Trip (3GT)",
      category: "SOUND MIXING DEPARTMENT",
      year: 2025,
      poster: "GopiGallaGoatrip(3GT).jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Sasi Camp, Rohit Penumatsa",
      role: "Dolby Theatre Mastering & Atmospheric Waves panning",
      platform: "Selected Independent screens / Digital Platforms",
      genre: "Indie Comedy / Adventure / Wilderness",
      imdbUrl: "https://www.imdb.com",
      cast: ["Camp Ensembles"],
      overview: "Cult travel comedy movie. Santhosh Kumar Vodnala mixed deep seaside ambient waves, campfire acoustics, and outdoor youth dialogues in beautiful surround depth.",
      gallery: ["GopiGallaGoatrip(3GT).jpeg"]
    },
    {
      id: "prj-sound-abcd",
      name: "ABCD: American Born Confused Desi",
      category: "SOUND MIXING DEPARTMENT",
      year: 2019,
      poster: "ABCDAmericanBornConfusedDesi.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Sanjeev Reddy",
      role: "Theatrical Dolby Sound Mixing & Master Re-recording",
      platform: "Theatrical releases / Prime Video",
      genre: "Comedy / Urban life / Drama",
      imdbUrl: "https://www.imdb.com/title/tt8400034/",
      cast: ["Allu Sirish", "Rukshar Dhillon"],
      overview: "Highly energetic comedy drama. We balanced international metropolitan static audio lines with extremely loud, native suburban festive background beats.",
      gallery: ["ABCDAmericanBornConfusedDesi.jpeg"]
    },
    {
      id: "prj-sound-majili",
      name: "Majili",
      category: "SOUND MIXING DEPARTMENT",
      year: 2019,
      poster: "Majili.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Shiva Nirvana",
      role: "Dolby Atmos Spatial Audio Balancing & Final Sound Master",
      platform: "Theatrical / Prime Video / Star Maa",
      genre: "Romance / Sports Drama",
      imdbUrl: "https://www.imdb.com/title/tt9473200/",
      cast: ["Naga Chaitanya", "Samantha Ruth Prabhu", "Divyansha Kaushik"],
      overview: "An emotional, sports-centric cinematic feature where our sound desk balanced massive stadium crowds with extremely intimate dialogues and soft orchestral elements.",
      gallery: ["Majili.jpeg"]
    },

    // ==========================================
    // MUSIC DEPARTMENT
    // ==========================================
    {
      id: "prj-music-gopi-galla",
      name: "Gopi Galla Goa Trip (3GT)",
      category: "MUSIC DEPARTMENT",
      year: 2025,
      poster: "GopiGallaGoatrip(3GT).jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Sasi Camp, Rohit Penumatsa",
      role: "Electronic Soundscapes, Indie Synth & Background Scores",
      platform: "Spotify / Apple Music",
      genre: "Electronic Travelogue",
      imdbUrl: "https://www.imdb.com",
      cast: ["Composing Stems"],
      overview: "Unconventional, modern ambient synthesizers blended with regional classical guitar patterns, creating a highly memorable traveling score.",
      gallery: ["GopiGallaGoatrip(3GT).jpeg"]
    },
    {
      id: "prj-music-kanyakumari",
      name: "Kanyakumari",
      category: "MUSIC DEPARTMENT",
      year: 2025,
      poster: "Kanyakumari.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Srujan Attada",
      role: "Orchestral Harmony & Melodic Arrangement",
      platform: "YouTube Music / Spotify",
      genre: "Melodic Cinematic Soundtrack",
      imdbUrl: "https://www.imdb.com",
      cast: ["Acoustic Musicians"],
      overview: "Deep seaside melody and emotional orchestral strings recorded in our custom acoustically treated soundstages for premium digital distribution.",
      gallery: ["Kanyakumari.jpeg"]
    },
    {
      id: "prj-music-srishti",
      name: "Srishti",
      category: "MUSIC DEPARTMENT",
      year: 2025,
      poster: "Srishti.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Paul Antar",
      role: "Chief Score Orchestrtor",
      platform: "Digital Stores",
      genre: "Classical Cinematic Epic",
      imdbUrl: "https://www.imdb.com",
      cast: ["Vocal Ensemble Members"],
      overview: "Symphonic background themes matching full-frequency live choirs and brass sessions to reinforce grand cinematic storytelling scope.",
      gallery: ["Srishti.jpeg"]
    },
    {
      id: "prj-music-lovers-club",
      name: "Lovers Club",
      category: "MUSIC DEPARTMENT",
      year: 2017,
      poster: "LoversClub.jpeg",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=113",
      director: "Dhruv Sekhar",
      role: "Music arrangement & Melodic composing",
      platform: "Theatrical release / Wynk Music",
      genre: "Romance Album",
      imdbUrl: "https://www.imdb.com/title/tt7617112/",
      cast: ["Leading Love Album team"],
      overview: "A highly acclaimed romantic film theme album. Features soft piano layers, melodic flute harmonies, and rich warm vocal production masters.",
      gallery: ["LoversClub.jpeg"]
    }
  
  
  ],
  upcomingReleases: [
    {
      id: "rel-1",
      title: "Solitary Orbit (2026)",
      releaseDate: "December 18, 2026",
      servicesProvided: ["Full Digital Intermediate", "Dolby Atmos 7.1.4 Sound Mix", "Photorealistic Spaceship Compositing"],
      poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      synopsis: "In the distant ring-nebula, a lone pilot detects a radio transmission echoing from inside a binary black hole. A highly atmospheric sci-fi thriller requiring micro-precise contrast, starfield depth mastering, and dense room tone acoustic design.",
      trailerUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Zackary Stone"
    },
    {
      id: "rel-2",
      title: "Dust & Glory",
      releaseDate: "February 12, 2027",
      servicesProvided: ["DaVinci Color grading", "Foley soundscapes", "OTT Netflix master packaging"],
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      synopsis: "A historical action biopic focusing on ancient chariot races. Styled with sun-drenched high contrast golden warm tones, dry earth textures, and thunderous surround-sound foley that puts the spectator right beneath the wheels.",
      trailerUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fb1d23eb649830da0ab7fbde3640&profile_id=165",
      director: "Clara Johansson"
    }
  ],
  caseStudies: [
    {
      id: "cs-1",
      projectTitle: "The Phoenix Awakening",
      challenge: "The movie was captured on anamorphic lenses with active sensor flaring and low-light grain, leading to severe visual noise in shadows and inconsistent tone palettes between wide desert shots and tight spacecraft cockpits.",
      process: "We developed customized ACES luma templates to bypass standard video compression curves. The team utilized local spectral grain profiling in DaVinci Resolve, isolating grain to key high-mid frequencies.",
      solution: "Shadow regions were carefully isolated using spatial noise gating protocols in our calibrated Christie projection theater, ensuring pure black thresholds without clipping fine shadow textures.",
      result: "Achieved absolute, rich HDR shadow detail while keeping film-grain aesthetic entirely uniform, culminating in the film sweeping three major Cinematography prizes.",
      beforeImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80&grayscale=true", // Raw ungraded desaturated representation
      afterImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" // Fully graded warm glowing representation
    },
    {
      id: "cs-2",
      projectTitle: "Neo-Tokyo Spatial Audio",
      challenge: "The director wanted a sound design that dynamically reflected the chaotic, layered urban architecture of vertical mega-cities—combining localized background static, low-frequency atmospheric train tracks, and overhead flyer hums.",
      process: "We crafted a comprehensive spatial sound coordinate spreadsheet. Using our hybrid Pro Tools S6 hybrid array, we assigned audio cues to physical speakers mapping objects in real-time space.",
      solution: "Built a customized binaural spatial panning model for secondary OTT streams to capture the 7.1.4 Dolby array experience through standard headphone deliverables.",
      result: "An incredibly immersive atmosphere widely praised by critics, leading to a 34% hike in immersive surround headphones consumption statistics during streaming release.",
      beforeImage: "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1200&q=80&grayscale=true",
      afterImage: "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  awards: [
    {
      id: "aw-1",
      year: 2025,
      awardName: "Outstanding Achievement in Digital Intermediate",
      project: "The Phoenix Awakening",
      category: "Global Film Alliance Awards"
    },
    {
      id: "aw-2",
      year: 2024,
      awardName: "Best Sound Design & Spatial Audio Integration",
      project: "Neo-Tokyo Chronicles",
      category: "Cinematic Acoustics Guild"
    },
    {
      id: "aw-3",
      year: 2024,
      awardName: "Best Color Design - Commercial Division",
      project: "Luxe Chrono: Masterpiece",
      category: "Creative Arts Advertising Festival"
    },
    {
      id: "aw-4",
      year: 2023,
      awardName: "Excellence in OTT Deliverable Integration",
      project: "The Void Below",
      category: "Streamer Tech Summit Awards"
    }
  ],
  team: [
    {
      id: "tm-1",
      name: "Ashoka & Anand Jatla",
      department: "FOUNDERS",
      position: "Founders & Creative Directors",
      photo: "/team/founders.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      imdb: "https://imdb.com",
      summary: "Visionary industry leaders and founders of AAA Phoenix Post Production Studio. Over 10 years of experience steering theatrical post pipelines and establishing enterprise standards for Dolby Atmos and HDR integration.",
      experience: "10 Years of Post-Production Experience",
      previousWorks: []
    },
    {
      id: "tm-3",
      name: "Vidhan Bommalla",
      department: "DI DEPARTMENT",
      position: "Chief DI Colorist & Technical Director",
      photo: "/team/vidhan.jpg",
      linkedin: "https://linkedin.com",
      imdb: "https://imdb.com",
      summary: "A skilled Digital Intermediate professional specializing in color workflows, visual consistency, and cinematic finishing. His expertise ensures every frame achieves the intended creative vision while maintaining technical excellence.",
      experience: "3 plus years experience",
      previousWorks: ["Siblings", "10 Days Apart"]
    },
    {
      id: "tm-4",
      name: "Shashank Mali",
      department: "EDITORS",
      position: "Senior Editor",
      photo: "/team/shashank.jpg",
      linkedin: "https://linkedin.com",
      summary: "An experienced editor known for crafting compelling narratives through precise editing, pacing, and storytelling. His portfolio spans feature films, web content, and independent productions.",
      experience: "7+ Years in Narrative Feature Editing",
      previousWorks: [
        "Arjun Reddy",
        "8 Vasanthalu",
        "Sahakutumbaanam",
        "Gamblers",
        "Marakkuma Nenjam",
        "Kanulu Therichinaa Kanulu Moosinaa",
        "Geometry Box",
        "36 Farmhouse",
        "Cocktail Diaries",
        "Veera Bhoga Vasantha Rayalu",
        "Aithey 2.0",
        "Social Series"
      ]
    },
    {
      id: "tm-5",
      name: "Pradeep Moram",
      department: "EDITORS",
      position: "Editor",
      photo: "/team/pradeep.jpg",
      instagram: "https://instagram.com",
      summary: "A creative editor with expertise in feature films and OTT content, delivering engaging visual storytelling through meticulous editing and post-production craftsmanship.",
      experience: "6+ Years in Feature Conforming & Assembly",
      previousWorks: [
        "Happy Ending",
        "14 Days: Girlfriend Intlo"
      ]
    },
    {
      id: "tm-6",
      name: "Santhosh Kumar Vodnala",
      department: "SOUND DEPARTMENT",
      position: "Senior Sound Designer & Re-Recording Mixer",
      photo: "/team/shantosh.jpg",
      linkedin: "https://linkedin.com",
      imdb: "https://imdb.com",
      summary: "An accomplished re-recording mixer and sound engineer specializing in theatrical releases, OTT productions, and immersive audio experiences.",
      experience: "9+ Years in Theatrical Sound Fields",
      previousWorks: [
        "Saving The Tigers",
        "Memu Copulam",
        "Om Shanti Shanti Shantihi",
        "Santhana Prapthirasthu",
        "Nee Dhaarey Nee Katha",
        "Seetharam Sitralu",
        "Laggam",
        "Tuk Tuk",
        "Bhamakalapam 2",
        "Mishan Impossible",
        "Agent Sai Srinivasa Athreya",
        "90's – A Middle Class Biopic",
        "Psych Siddhartha",
        "Gopi Galla Goa Trip (3GT)",
        "ABCD: American Born Confused Desi",
        "Majili"
      ]
    },
    {
      id: "tm-7",
      name: "Swapnik Rao Valipe",
      department: "SOUND DEPARTMENT",
      position: "Senior Dolby Atmos Mixing Engineer",
      photo: "/team/swapnik.jpg",
      linkedin: "https://linkedin.com",
      summary: "A passionate sound designer dedicated to creating immersive audio experiences that enhance storytelling and emotional engagement.",
      experience: "7+ Years in Multi-Channel Dolby Mastering",
      previousWorks: [
        "Sri Chidambaram",
        "Jigris",
        "Anaganaga",
        "Roti Kapda Romance",
        "Nee Dhaarey Nee Katha",
        "Saagu",
        "Mem Famous",
        "8 AM Metro",
        "Godari",
        "Good Luck Sakhi"
      ]
    },
    {
      id: "tm-8",
      name: "Ravi Nidaparthy",
      department: "MUSIC",
      position: "Chief Music Director & Orchestrator",
      photo: "/team/ravi.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      summary: "A music professional committed to elevating storytelling through impactful soundtracks, musical arrangements, and audio creativity.",
      experience: "10+ Years in Cinematic Scoring & Composing",
      previousWorks: [
        "Gopi Galla Goa Trip (3GT)",
        "Kanyakumari",
        "Happy Ending",
        "Srishti",
        "Lovers Club"
      ]
    }
  ],
  testimonials: [
    {
      id: "tst-1",
      quote: "Working with AAA Phoenix is an absolute game-changer. They didn't just color grade my film; they elevated the entire narrative tension through color design, bringing a stunning painterly richness that we dreamed of during production.",
      author: "Alexander Vance",
      role: "Award-Winning Film Director",
      productionCompany: "Vance Vanguard Films",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=100"
    },
    {
      id: "tst-2",
      quote: "The Atmos mix created here is staggering. Our space sequences boast a visceral depth, placing heavy rumble objects with complete precision. AAA Phoenix represents the golden standard of spatial cinematic audio.",
      author: "Kenji Sato",
      role: "Showrunner & Creator of Neo-Tokyo",
      productionCompany: "Tokyo Arc Media",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=100"
    }
  ],
  process: [
    {
      id: "prc-1",
      stepNumber: "Step 01",
      title: "Project Intake & Conform",
      description: "Ingesting raw camera sensor packages and setting up synchronized ACES color spaces over local fiber SAN networks."
    },
    {
      id: "prc-2",
      stepNumber: "Step 02",
      title: "Narrative Assembly & Editing",
      description: "Precision-editing cuts for runtime, pacing, dialogue alignments, and structural narrative cohesion on local workstations."
    },
    {
      id: "prc-3",
      stepNumber: "Step 03",
      title: "Visual Color Design",
      description: "Crafting atmospheric color sweeps, primary balance corrections, local tracking shapes, and narrative grading signatures."
    },
    {
      id: "prc-4",
      stepNumber: "Step 04",
      title: "Spatial Atmos Mix",
      description: "Sound design orchestration, specialized live foley tracks, Dialogue editing, and 7.1.4 theatrical surround object soundscapes."
    },
    {
      id: "prc-5",
      stepNumber: "Step 05",
      title: "OTT & Cinema Mastering",
      description: "Conforming master exports to strict Dolby Vision metadata matrices and compiling international IMF packages."
    },
    {
      id: "prc-6",
      stepNumber: "Step 06",
      title: "Delivery & Archiving",
      description: "Secure automated high-speed uploads to distributor servers alongside secure deep LTO tape cold archiving."
    }
  ],
  whyChooseUs: [
    {
      id: "wcu-1",
      title: "State-of-the-art Infrastructure",
      description: "Dual 4K Laser Projectors, Munro acoustic-designed Atmos theatres, and high-performance render hubs utilizing fiber architecture.",
      iconName: "Cpu"
    },
    {
      id: "wcu-2",
      title: "Industry Experts",
      description: "Collaborate with master colorists, award-winning sound engineers, and creative leads with multiple credits in major releases.",
      iconName: "Award"
    },
    {
      id: "wcu-3",
      title: "Fast Delivery",
      description: "Proprietary server infrastructures and dynamic pipeline tools that cut standard rendering down by up to 50 percent.",
      iconName: "Zap"
    },
    {
      id: "wcu-4",
      title: "World-Class Quality",
      description: "Strict quality checkpoints ensure every asset conforms precisely to Netflix HDR, Apple Dolby, and theatrical distribution rules.",
      iconName: "ShieldCheck"
    }
  ],
  studioDetails: {
    address: "740 Phoenix Boulevard, Soundstage Suite 9, Hollywood, CA 90028",
    phone: "+1 (310) 555-0900",
    email: "contact@aaaphoenix.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    vimeo: "https://vimeo.com",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105658.74955113945!2d-118.41164881079374!3d34.14251341065671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf070cc37937%3A0x3ecb70bdc39e2474!2sHollywood%20Walk%20of%20Fame!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
  },
  gallery: [
    {
      id: "gal-1",
      category: "Editing Suites",
      imageUrl: "/EditingSuite.jpg.jpeg",
      title: "Assembly Suite 4",
      description: "State-of-the-art non-linear editorial suite with localized shared storage access."
    },
    {
      id: "gal-2",
      category: "DI Color Grading Rooms",
      imageUrl: "/DiRoom.png",
      title: "Resolve Grading Theatre",
      description: "SMPTE-calibrated workspace for ultimate color precision and client viewings."
    },
    {
      id: "gal-3",
      category: "Dolby Atmos Studio",
      imageUrl: "/studio/sound-design-room.jpg",
      title: "Atmos Sound Chamber",
      description: "Calibrated 7.1.4 PMC loudspeaker array for high-fidelity spatial soundtracks."
    },
    {
      id: "gal-4",
      category: "Sound Design Room",
      imageUrl: "/studio/sound-design-room.jpg",
      title: "Foley & Design Room",
      description: "Acoustically isolated room equipped with multi-surface Foley pits and dynamic tools."
    },
    {
      id: "gal-5",
      category: "Dubbing Theatre",
      imageUrl: "/studio/dubbing-theatre.jpg",
      title: "Main Dubbing Theatre",
      description: "Large recording space configured for clean dialogue ADR tracking and vocal syncing."
    },
    {
      id: "gal-6",
      category: "Client Lounge",
      imageUrl: "/EditingSuite.jpg.jpeg",
      title: "Phoenix Premium Executive Lounge",
      description: "Plush relaxation and hospitality area overlooking the Hollywood skyline."
    },
    {
      id: "gal-7",
      category: "Preview Theatre",
      imageUrl: "/DiRoom.png",
      title: "4K Laser Projection Preview",
      description: "A 15-seat luxury screening theatre supporting high-frame-rate master screenings."
    },
    {
      id: "gal-8",
      category: "Production Floor",
      imageUrl: "/EditingSuite.jpg.jpeg",
      title: "Creative Ops Hub",
      description: "Dynamic collaborative workspace bridging editorial, VFX, and production operations."
    },
    {
      id: "gal-9",
      category: "Team At Work",
      imageUrl: "/Behindthescenes.jpg.jpeg",
      title: "Mastering Session",
      description: "Our core post specialists verifying Rec.2020 HDR profiles and Dolby audio feeds."
    },
    {
      id: "gal-10",
      category: "Behind The Scenes",
      imageUrl: "/Behindthescenes.jpg.jpeg",
      title: "Directorial Review Panel",
      description: "Visionary directors collaborating face-to-face with colorists during final masters."
    }
  ]
};
