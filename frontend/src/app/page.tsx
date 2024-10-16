import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
  OurExperts,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-2 sm:p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <div className="p-2 sm:p-4">
        <Testimonials />
      </div>
      <OurExperts />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
      <Blog />
    </main>
  );
}
