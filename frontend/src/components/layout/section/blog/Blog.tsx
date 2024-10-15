import Image from "next/image";

function Blog() {
  return (
    <section className="bg-secondary-950 py-48">
      <div className="container">
        <div className="mb-12 flex items-center border-b border-neutral-300 pb-4 text-white sm:mb-14">
          <span className="mr-4 block size-2 rounded-full bg-primary-300" />
          <span>Blog</span>
        </div>

        <div>
          <div className="flex w-full items-center justify-between">
            <h2 className="text-features leading-none text-white">Blog</h2>
            <button className="rounded-full border px-6 py-3 text-white">
              View All
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-24 md:grid-cols-2">
            <div className="group flex cursor-pointer flex-col gap-8">
              <div className="aspect-video h-[360px] overflow-hidden rounded-3xl">
                <Image
                  src="/hero/hero-1.webp"
                  height={360}
                  width={360}
                  alt="Blog 1"
                  className="h-full w-full object-cover duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="mb-4 text-sub-title leading-none text-white">
                  Harnessing the Power of the Sun: Exploring the World of Solar
                  Energy
                </h3>
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
            </div>
            <div className="group flex cursor-pointer flex-col gap-8">
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
                <h3 className="mb-4 text-sub-title leading-none text-white">
                  Harnessing the Power of the Sun: Exploring the World of Solar
                  Energy
                </h3>
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
            </div>
            <div className="group flex cursor-pointer flex-col gap-8">
              <div className="aspect-video h-[360px] overflow-hidden rounded-3xl">
                <Image
                  src="/hero/hero-3.webp"
                  height={360}
                  width={360}
                  alt="Blog 1"
                  className="h-full w-full object-cover duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="mb-4 text-sub-title leading-none text-white">
                  Harnessing the Power of the Sun: Exploring the World of Solar
                  Energy
                </h3>
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
            </div>
            <div className="group flex cursor-pointer flex-col gap-8">
              <div className="aspect-video h-[360px] overflow-hidden rounded-3xl">
                <Image
                  src="/hero/hero-4.webp"
                  height={360}
                  width={360}
                  alt="Blog 1"
                  className="h-full w-full object-cover duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="mb-4 text-sub-title leading-none text-white">
                  Harnessing the Power of the Sun: Exploring the World of Solar
                  Energy
                </h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Blog };
