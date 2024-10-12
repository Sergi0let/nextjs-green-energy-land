import { Check } from "@/components/elements";
import { AboutUsCarousel } from "./AboutUsCarousel";

const AboutUs = () => {
  return (
    <section className="py-48 bg-secondary-950">
      <div className="container">
        <div className="flex text-white items-center border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
          <span className="size-2 bg-primary-300 block rounded-full mr-4" />
          <span>About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-36">
          <div className="flex justify-center flex-col gap-6">
            <h2 className="text-features leading-none text-white">
              Committed to a sustainable future
            </h2>
            <p className="text-white/80 text-base">
              As a pioneering force in the green energy sector, we&apos;ve been
              at the forefront of the transition to clean, renewable power
              sources. Our mission is simple yet profound: to create a world
              where energy is not only abundant but also environmentally
              responsible. We believe that by harnessing the power of nature, we
              can power the world and protect it simultaneously.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-1">
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
