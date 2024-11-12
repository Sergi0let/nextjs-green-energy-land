import { Container, Heading, LinkBtn, SectionBlock } from "@/components";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export type HeroType = {
  data: {
    hero: {
      heading: string;
      tagline: string;
    };
    promotion: {
      title: string;
      link?: string;
    };
    gallery: {
      imageUrls: [{ url: string }];
    };
  };
};

const Hero = ({ data }: HeroType) => {
  const { hero, gallery, promotion } = data;

  return (
    <SectionBlock className="flex h-fit flex-col gap-32 bg-secondary-950 py-48">
      <Container className="flex h-1/2 items-center justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="hero-block">
            <Heading
              as="h1"
              animate
              className="text-pretty break-words text-hero leading-none text-white"
            >
              {hero?.heading}
            </Heading>
          </div>
          <div className="mt-6 flex grid-cols-2 flex-col justify-between gap-6 sm:mt-0 sm:gap-0 md:ml-52 md:justify-around">
            <p className="text-base text-white">{hero?.tagline}</p>
            <LinkBtn
              className={"mt-10"}
              href={promotion?.link || "/"}
              title={promotion?.title}
              animDelay={2}
              animText={promotion?.title.replace(/^\w+/, "Learn")}
            />
          </div>
        </div>
      </Container>
      <div className="col-span-2 h-1/2 w-full">
        <Marquee autoFill speed={20}>
          <div className="mx-4 flex items-start justify-center gap-8">
            {gallery?.imageUrls.map(
              (
                image: HeroType["data"]["gallery"]["imageUrls"][0],
                index: number,
              ) => (
                <figure
                  key={index}
                  className="max-h-[600px] min-h-80 max-w-[450px] overflow-hidden"
                >
                  <Image
                    src={image.url}
                    alt="Carusel image"
                    width={450}
                    height={250}
                    className="h-full w-full object-fill"
                  />
                </figure>
              ),
            )}
          </div>
        </Marquee>
      </div>
    </SectionBlock>
  );
};

export { Hero };
