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
  const {
    hero,
    promotion,
    solutions,
    metrics,
    testimonials,
    ourExpert,
    about,
    gallery,
  } = data;
  const heroData = { hero, promotion, gallery };
  return (
    <main className="no-scrollbar overflow-hidden">
      <Hero data={heroData} />
      <div className="p-2 sm:p-4">
        <Features solutions={solutions} />
      </div>
      <AboutUs about={about} />
      <Metrics metrics={metrics} />
      <div className="p-2 sm:p-4">
        <Testimonials data={testimonials} />
      </div>
      <OurExperts experts={ourExpert} />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
      <Blog />
    </main>
  );
}
