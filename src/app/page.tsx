"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import Testimonials from '@/components/sections/layouts/testimonials/Testimonials';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 1,
      textAnimation: 'slide',
    }}>
      <section id="hero" className="flex flex-col items-center justify-center h-screen bg-[radial-gradient(circle_at_20%_-10%,rgba(0,229,255,.25),transparent_40%),linear-gradient(#0A0A12,#0A0A12)]">
        <CyclopsHero 
          title="Welcome to FutureFrame Photography"
          subtitle="Capturing moments through a futuristic lens"
          primaryButtonText="Inquire Now"
          secondaryButtonText="View Portfolio"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </section>
      <section id="about" className="py-20 bg-[#0A0A12]">
        <MinimalAbout description="We are dedicated to creating stunning visual stories with a unique touch of innovation and artistry." />
      </section>
      <section id="portfolio" className="py-20 bg-pattern bg-[url('/images/placeholderwide1.jpg')]">
        <GalleryBento items={[
          { title: "Photo 1", image: "/images/placeholder1.avif" },
          { title: "Photo 2", image: "/images/placeholder2.avif" },
          { title: "Photo 3", image: "/images/placeholder3.avif" },
          { title: "Photo 4", image: "/images/placeholder4.avif" },
          { title: "Photo 5", image: "/images/placeholder5.avif" },
          { title: "Photo 6", image: "/images/placeholder6.avif" },
          { title: "Photo 7", image: "/images/placeholder7.avif" },
          { title: "Photo 8", image: "/images/placeholderwide2.jpg" }
        ]} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" />
      </section>
      <section id="services" className="py-20 bg-[#0A0A12]">
        <SimpleKPIBento items={[
          { value: "Photography", description: "Professional high-quality images" },
          { value: "Editing", description: "Creative photo editing" },
          { value: "Consultation", description: "Personalized consultations" }
        ]} className="grid grid-cols-1 md:grid-cols-2 gap-5" />
      </section>
      <section id="testimonials" className="py-20 bg-[#0A0A12]">
        <Testimonials items={[
          { quote: "Incredible service and stunning photos!", name: "Client 1" },
          { quote: "Simply the best photography experience I've ever had!", name: "Client 2" },
          { quote: "Highly professional and very creative!", name: "Client 3" }
        ]} className="text-center" />
      </section>
      <section id="contact" className="py-20 bg-[#0A0A12]">
        <form className="flex flex-col max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="mb-4 p-3 rounded" required />
          <input type="email" placeholder="Your Email" className="mb-4 p-3 rounded" required />
          <textarea placeholder="Your Message" className="mb-4 p-3 rounded" rows="5" required></textarea>
          <button type="submit" className="bg-[#00E5FF] text-black p-3 rounded">Send Message</button>
        </form>
      </section>
    </SiteThemeProvider>
  );
}
