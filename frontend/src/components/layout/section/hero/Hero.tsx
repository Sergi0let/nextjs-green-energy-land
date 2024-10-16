import { Button, Container, SectionBlock } from "@/components";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <SectionBlock className="flex h-fit flex-col gap-32 bg-secondary-950 py-48">
      <Container className="flex h-1/2 items-center justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="">
            <h1 className="text-hero leading-none text-white">
              The Future of Green Energy
            </h1>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-6 sm:mt-0 sm:gap-0">
            <p className="text-base text-white">
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet. Join us on a journey towards a future where
              clean, renewable energy sources transform the way we power our
              lives.
            </p>
            {/* <Link className="mt-4" href="/solutions">
              <span className="rounded-full bg-primary-300 px-5 py-4 font-semibold duration-300 hover:bg-primary-400">
                See our solutions
              </span>
            </Link> */}
            <Button variant="secondary">See our solutions</Button>
          </div>
        </div>
      </Container>
      <div className="col-span-2 h-1/2 w-full">
        <Marquee autoFill speed={20}>
          <div className="mx-4 flex items-start justify-center gap-8">
            <Image
              src="/hero/hero-1.webp"
              alt="Hero image 1"
              width={450}
              height={250}
            />
            <Image
              src="/hero/hero-2.webp"
              alt="Hero image 2"
              width={450}
              height={250}
            />
            <Image
              src="/hero/hero-3.webp"
              alt="Hero image 3"
              width={450}
              height={250}
            />
            <Image
              src="/hero/hero-4.webp"
              alt="Hero image 4"
              width={450}
              height={250}
            />
          </div>
        </Marquee>
      </div>
    </SectionBlock>
  );
};

export { Hero };
