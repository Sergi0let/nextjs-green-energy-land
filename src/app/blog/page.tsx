import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Our blog" />
        <div className="text-white">
          <Heading as="h1" className="leadingnone text-hero">
            Our Latest Posts
          </Heading>
          <p className="mt-24 max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae odit qui explicabo voluptates, dignissimos, voluptatibus
            id, itaque adipisci iure praesentium incidunt cum nobis.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-2">
          <Link
            href="/blog/post-1"
            className="group flex cursor-pointer flex-col gap-8"
          >
            <div className="aspect-video h-[360px] overflow-hidden rounded-3xl">
              <Image
                src="/hero/hero-2.webp"
                height={360}
                width={360}
                alt="Blog 1"
                className="h-full w-full object-cover duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-between">
              <Heading
                as="h3"
                className="mb-4 text-sub-title leading-none text-white"
              >
                Harnessing the Power of the Sun: Exploring the World of Solar
                Energy
              </Heading>
              <p className="line-clamp-2 text-base text-neutral-400">
                Solar energy is revolutionizing the way we power our world. In
                this blog post, we&rsquo;ll delve into the incredible potential
                of solar technology, its environmental benefits, and how you can
                tap into this sustainable energy source for a brighter future.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/avatar/avatar-1.webp"
                  height={40}
                  width={40}
                  alt="Avatar 1"
                  className="h-[40px] rounded-full object-cover"
                />
                <span className="text-white">Leslie Alexander</span>
              </div>
              <div className="text-white"> 9 min read</div>
            </div>
          </Link>
        </div>
      </Container>
    </SectionBlock>
  );
}