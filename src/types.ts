export interface StudioStats {
  projects: number;
  awards: number;
  clients: number;
  years: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  iconName: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string; // DI Theatre, Sound Mixing Theatre, Editing Suites, VFX Department, Preview Theatre, Workstations
  image: string;
  description: string;
  equipment: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string; // EDITORIAL DEPARTMENT, COLOR DEPARTMENT, SOUND MIXING DEPARTMENT, MUSIC DEPARTMENT
  year: number;
  poster: string;
  videoUrl: string; // for hover preview / lightbox
  director: string;
  role: string; // DI, Audio, VFX, Color, etc.
  platform?: string;
  overview?: string;
  genre?: string;
  imdbUrl?: string;
  cast?: string[];
  gallery?: string[];
  trailerUrl?: string;
}

export interface UpcomingRelease {
  id: string;
  title: string;
  releaseDate: string;
  servicesProvided: string[];
  poster: string;
  synopsis: string;
  trailerUrl: string;
  director: string;
}

export interface CaseStudy {
  id: string;
  projectTitle: string;
  challenge: string;
  process: string;
  solution: string;
  result: string;
  beforeImage: string; // graded vs raw/log
  afterImage: string;
}

export interface AwardItem {
  id: string;
  year: number;
  awardName: string;
  project: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  department: string;
  position: string;
  photo: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  imdb?: string;
  summary?: string;
  experience?: string;
  previousWorks?: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  productionCompany: string;
  videoUrl?: string;
  avatar: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StudioDetails {
  address: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  vimeo: string;
  mapsEmbedUrl: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  imageUrl: string;
  title: string;
  description: string;
}

export interface CmsData {
  companyName: string;
  heroTagline: string;
  heroHeading: string;
  heroSubheading: string;
  heroVideoUrl: string;
  aboutText: string;
  aboutTitle: string;
  aboutImage: string;
  stats: StudioStats;
  services: ServiceItem[];
  showcase: ShowcaseItem[];
  projects: ProjectItem[];
  upcomingReleases: UpcomingRelease[];
  caseStudies: CaseStudy[];
  awards: AwardItem[];
  team: TeamMember[];
  testimonials: TestimonialItem[];
  process: ProcessStep[];
  whyChooseUs: ValueCard[];
  studioDetails: StudioDetails;
  gallery: GalleryItem[];
}
