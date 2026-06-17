import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { CmsData } from "../types";

interface ContactPageProps {
  cmsData: CmsData;
}

export default function ContactPage({ cmsData }: ContactPageProps) {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h1 className="text-5xl sm:text-7xl font-heading font-black uppercase mb-8">CONTACT US</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 bg-white border border-[#ECE7DF]">
            <Phone className="w-8 h-8 text-[#FC8019] mx-auto mb-4" />
            <h3 className="font-bold uppercase mb-2">Phone</h3>
            <a href={`tel:${cmsData.studioDetails.phone}`} className="text-[#FC8019] hover:underline">
              {cmsData.studioDetails.phone}
            </a>
          </div>
          
          <div className="p-8 bg-white border border-[#ECE7DF]">
            <Mail className="w-8 h-8 text-[#FC8019] mx-auto mb-4" />
            <h3 className="font-bold uppercase mb-2">Email</h3>
            <a href={`mailto:${cmsData.studioDetails.email}`} className="text-[#FC8019] hover:underline">
              {cmsData.studioDetails.email}
            </a>
          </div>
          
          <div className="p-8 bg-white border border-[#ECE7DF]">
            <MapPin className="w-8 h-8 text-[#FC8019] mx-auto mb-4" />
            <h3 className="font-bold uppercase mb-2">Address</h3>
            <p className="text-sm text-[#666666]">{cmsData.studioDetails.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
