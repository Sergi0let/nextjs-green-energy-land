import { Container, SectionBlock } from "@/components";
import { getHomePageData } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Hero = async () => {
  const data = await getHomePageData();
  const { hero, gallery, promotion } = data;

  return (
    <SectionBlock className="flex h-fit flex-col gap-32 bg-secondary-950 py-48">
      <Container className="flex h-1/2 items-center justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="">
            <h1 className="text-pretty break-words text-hero leading-none text-white">
              {hero?.heading}
            </h1>
          </div>
          <div className="mt-6 flex grid-cols-2 flex-col justify-between gap-6 sm:mt-0 sm:gap-0 md:justify-around">
            <p className="text-base text-white">{hero?.tagline}</p>
            <Link className="mt-4" href={promotion?.link}>
              <span className="rounded-full bg-primary-300 px-5 py-4 font-semibold duration-300 hover:bg-primary-400">
                {promotion?.title}
              </span>
            </Link>
          </div>
        </div>
      </Container>
      <div className="col-span-2 h-1/2 w-full">
        <Marquee autoFill speed={20}>
          <div className="mx-4 flex items-start justify-center gap-8">
            {gallery?.imageUrls.map(
              (image: { [key: string]: string }, index: number) => (
                <figure
                  key={index}
                  className="max-h-[600px] min-h-80 max-w-[450px] overflow-hidden"
                >
                  <Image
                    src={image.url}
                    alt="Carusel image"
                    width={450}
                    height={250}
                    className="h-full w-full object-cover"
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
