import {
  Check,
  Container,
  Heading,
  SectionBlock,
  SubTitle,
} from "@/components";
import { AboutUsCarousel } from "./AboutUsCarousel";

const AboutUs = () => {
  return (
    <SectionBlock className="bg-secondary-950 py-48">
      <Container className="container">
        <SubTitle subTitle="About Us" />
        <div className="grid gap-12 md:gap-36 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6">
            <Heading as="h2" className="text-section leading-none text-white">
              Committed to a sustainable future
            </Heading>
            <p className="text-base text-white/80">
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
      </Container>
    </SectionBlock>
  );
};

export { AboutUs };
