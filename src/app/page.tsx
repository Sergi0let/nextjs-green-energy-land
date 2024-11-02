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

import { getHomePageData } from "@/sanity/queries/page";

export default async function Home() {
  const data = await getHomePageData();

  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-2 sm:p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <div className="p-2 sm:p-4">
        <Testimonials data={data.testimonials} />
      </div>
      <OurExperts />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
      <Blog />
    </main>
  );
}
