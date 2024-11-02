import {
  Container,
  Heading,
  LinkedIn,
  LinkedIn2,
  SectionBlock,
  SubTitle,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function SingleBlogPage() {
  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-2 flex flex-col items-start justify-between gap-4">
            <Link href="/blog" className="text-white">
              Back to blog
            </Link>
            <div className="flex flex-col">
              <span className="text-white">Author</span>
              <div className="mt-8">
                <Image
                  src="/avatar/avatar-1.webp"
                  height={56}
                  width={56}
                  alt="Avatar 1"
                  className="h-[56px] rounded-full object-cover"
                />
                <div className="mt-4 text-white">Leslie Alexander</div>
              </div>
              <div className="mt-2 text-white">Solar Energy specialist</div>
            </div>
          </div>
          <div className="col-span-4 my-8 flex flex-col items-center gap-8 md:items-center md:text-center">
            <span className="rounded-full bg-white px-2 py-1">
              Solar Powered Energy
            </span>
            <Heading as="h1" className="text-section leading-none text-white">
              Harnessing the Power of the Sun: Exploring the World of Solar
              Energy
            </Heading>
            <div className="flex gap-3 text-white">
              <span>9 min read</span>
              <span> December 11, 2023</span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-end md:items-end">
            <div className="mb-6 text-white">Share</div>
            <div className="flex gap-3 md:flex-col">
              <LinkedIn />
              <LinkedIn />
              <LinkedIn />
              <LinkedIn />
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center md:my-8">
          <Image
            src="/hero/hero-1.webp"
            alt="Hero image 1"
            width={450}
            height={250}
            className="h-full w-full object-cover"
          />
          <div className="my-8 flex max-w-3xl flex-col gap-8 text-white md:my-16 md:gap-16">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              officia, delectus excepturi vitae ea error voluptates magnam
              animi? Expedita sed aliquam vero est iusto similique reprehenderit
              exercitationem eos recusandae accusantium?
            </p>
            <div className="flex flex-col items-start">
              <Heading as="h3" className="text-title">
                The basics of solar energy
              </Heading>
              <ul className="list-decimal pl-6">
                <li>
                  Photovoltanic Cells
                  <ul className="list-disc pl-6">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam, necessitatibus? Consequatur, id. Dicta, quas
                      corrupti distinctio sed ipsum quam debitis doloremque at
                      nam harum. Unde iste necessitatibus repellat nam veniam!
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum laudantium sequi eius vitae, cumque officia quas ab.
                      Ad iure ipsum ipsam minima corrupti ex voluptatum neque
                      obcaecati repudiandae velit? Architecto?
                    </li>
                  </ul>
                </li>
                <li>
                  Photovoltanic Cells
                  <ul className="list-disc pl-6">
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Non maxime nostrum modi eaque voluptates quae, officiis
                      totam odio commodi voluptatum, sunt adipisci? Commodi,
                      sunt veritatis ex nisi illum ullam nemo.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur voluptatibus sunt cupiditate quia, cumque
                      ex error id nam deserunt minima optio iusto excepturi
                      labore sapiente, magnam, tempora reiciendis earum?
                    </li>
                  </ul>
                </li>
                <li>
                  Photovoltanic Cells
                  <ul className="list-disc pl-6">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At, dolorum!
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Rerum dolores, earum in enim iure tempora odit unde
                      reprehenderit, quia quae fugit quo?
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="my-10 rounded-3xl bg-primary-300 p-10">
                <div className="grid gap-3">
                  <h2 className="text-title leading-none text-black">
                    You Source for Solar Energy News and Articles
                  </h2>
                  <div className="flex flex-col justify-center sm:flex-row sm:items-center sm:gap-3">
                    <input
                      placeholder="Your email address"
                      type="email"
                      className="mb-3 flex-grow rounded-full px-6 py-3 sm:mb-0"
                    />
                    <button className="rounded-full bg-primary-950 px-6 py-3 text-white duration-300 hover:bg-primary-700">
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
              <blockquote className="w-full shrink-0 rounded-3xl py-10 sm:col-span-1">
                <p className="min-h-[140px] text-left text-sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima rerum esse facilis magni! Neque officia dolorum saepe
                  cupiditate distinctio ipsam et rem consequuntur nesciunt
                  atque, repellendus nam, veritatis asperiores a!
                </p>
                <div className="mt-3 flex gap-6 sm:flex-row md:mt-0 md:items-center">
                  <div className="relative h-[56px] w-[56px] shrink-0">
                    <Image
                      src="/avatar/avatar-2.webp"
                      alt="Avatar 2"
                      height={90}
                      width={90}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
                    <div className="flex flex-col text-white">
                      <h3 className="text-sub-title">Jenny Wilson</h3>
                      <p className="text-sm text-white opacity-90">
                        Solar Energy Expert
                      </p>
                    </div>
                  </div>
                </div>
              </blockquote>
              <div className="my-6 flex flex-col items-start">
                <h3 className="text-title">The basics of solar energy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores qui pariatur molestiae inventore reprehenderit, harum
                  doloremque nam tempore enim. Repellat vero commodi ab numquam
                  voluptatibus. Dignissimos sunt magni possimus reprehenderit!
                </p>
              </div>
              <Image
                src="/hero/hero-2.webp"
                alt="Hero image 2"
                width={768}
                height={537}
                className="h-full w-full object-cover"
              />
              <div className="my-6 flex flex-col items-start">
                <h3 className="text-title">The basics of solar energy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores qui pariatur molestiae inventore reprehenderit, harum
                  doloremque nam tempore enim. Repellat vero commodi ab numquam
                  voluptatibus. Dignissimos sunt magni possimus reprehenderit!
                </p>
              </div>

              <div className="flex w-full flex-col gap-2 rounded-3xl bg-beigie-primary px-10 py-8 text-black md:flex-row md:gap-8">
                <div className="relative h-[56px] w-[56px] shrink-0">
                  <Image
                    src="/avatar/avatar-2.webp"
                    alt="Avatar 2"
                    height={56}
                    width={56}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="felx w-full flex-col justify-between gap-2">
                  <div className="flex flex-col">
                    <h3 className="text-sub-title font-bold">Jenny Wilson</h3>
                    <p className="text-sm opacity-90">Solar energy expert</p>
                  </div>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda repellat perferendis quod officia vero, at iure
                    suscipit hic id necessitatibus quaerat qui possimus
                    voluptate! Voluptatibus laboriosam rem ab laborum ut!
                  </p>
                  <LinkedIn2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SubTitle className="" subTitle="More like this" />
          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-3">
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
                  this blog post, we&rsquo;ll delve into the incredible
                  potential of solar technology, its environmental benefits, and
                  how you can tap into this sustainable energy source for a
                  brighter future.
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
                  this blog post, we&rsquo;ll delve into the incredible
                  potential of solar technology, its environmental benefits, and
                  how you can tap into this sustainable energy source for a
                  brighter future.
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
                  this blog post, we&rsquo;ll delve into the incredible
                  potential of solar technology, its environmental benefits, and
                  how you can tap into this sustainable energy source for a
                  brighter future.
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
        </div>
      </Container>
    </SectionBlock>
  );
}
