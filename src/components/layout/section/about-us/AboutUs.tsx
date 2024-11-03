import {
  Check,
  Container,
  Heading,
  SectionBlock,
  SubTitle,
} from "@/components";
import { AboutUsCarousel } from "./AboutUsCarousel";

export type AboutProps = {
  about: {
    heading: string;
    excerpt?: string;
    tagline: string;
    solutions: [{ heading: string; _key: string }];
    slider: [{ url: string }];
  };
};
const AboutUs = ({ about }: AboutProps) => {
  const { heading, tagline, excerpt, solutions, slider } = about;

  return (
    <SectionBlock className="bg-secondary-950 py-48">
      <Container className="container">
        <SubTitle subTitle={tagline} />
        <div className="grid gap-12 md:gap-36 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6">
            <Heading
              as="h2"
              animate
              className="text-wrap text-section leading-none text-white"
            >
              {heading}
            </Heading>
            <p className="text-base text-white/80">{excerpt}</p>
            <ul className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-1">
              {solutions.map(({ heading, _key }: { [key: string]: string }) => (
                <li key={_key} className="flex items-start gap-3 text-white">
                  <span className="h-6 w-6">
                    <Check />
                  </span>
                  {heading}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel images={slider} />
          </div>
        </div>
      </Container>
    </SectionBlock>
  );
};

export { AboutUs };
