import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Process } from "@/components/Process";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ProjectShowcase />
        <Process />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
