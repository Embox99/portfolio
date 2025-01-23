import React from "next/image";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./components/HeroSection"));
const Navbar = dynamic(() => import("./components/Navbar"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const ProjectSection = dynamic(() => import("./components/ProjectSection"));
const EmailSection = dynamic(() => import("./components/EmailSection"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
