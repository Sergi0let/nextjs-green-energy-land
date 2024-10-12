import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section className="bg-secondary-950 h-fit py-48 flex flex-col gap-32">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="">
            <h1 className="text-white text-hero leading-none">
              The Future of Green Energy
            </h1>
          </div>
          <div className="flex mt-6 flex-col justify-between gap-6 sm:gap-0 sm:mt-0">
            <p className="text-white text-base">
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet. Join us on a journey towards a future where
              clean, renewable energy sources transform the way we power our
              lives.
            </p>
            <Link href={"/solutions"}>
              <span className="py-4 px-5 bg-primary-300 rounded-full hover:bg-primary-400 duration-300 font-semibold">
                See our solutions
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full col-span-2 h-1/2">
        <Marquee autoFill speed={20}>
          <div className="flex justify-center gap-8 items-start mx-4">
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
    </section>
  );
}
// D:\my-works\next-learn-start\nextjs-green-energy-lnd\frontend\public\hero\hero-1.webp
