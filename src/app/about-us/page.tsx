import {
  Button,
  Container,
  Heading,
  LinkedIn2,
  NewLetter,
  SectionBlock,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <SectionBlock className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Heading className="text-hero" as="h1">
              About us
            </Heading>
            <div>
              <p className="mb-4">
                At Flow, we&apos;re committed to a sustainable future. As a
                pioneering force in the green energy sector, we&apos;ve been at
                the forefront of the transition to clean, renewable power
                sources. Our mission is simple yet profound: to create a world
                where energy is not only abundant but also environmentally
                responsible. We believe that by harnessing the power of nature,
                we can power the world and protect it simultaneously.
              </p>
              <Button variant="secondary">Read more</Button>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:h-screen md:grid-cols-4 md:grid-rows-4">
            <div className="col-span-2 row-span-4 grid h-full grid-cols-2 grid-rows-4 gap-4">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1730035377830-947be38df331?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={450}
                  height={320}
                  alt="Aerial view of a lush green area"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="col-span-2 row-span-2 grid grid-rows-2 gap-4 md:col-span-1">
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="label">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-black p-4 text-white md:col-span-1">
                <Heading as="h3" className="label">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-2 row-span-4 grid h-full grid-cols-2 grid-rows-4 gap-4">
              <div className="col-span-2 row-span-2 row-start-3 overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1728074490949-7f90256c758f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={450}
                  height={320}
                  alt="Aerial view of a lush green area"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="col-span-2 row-span-2 grid grid-rows-2 gap-4 md:col-span-1">
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="label">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-3xl bg-neutral-200 p-4">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-black p-4 text-white md:col-span-1">
                <Heading as="h3" className="label">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionBlock>
      <SectionBlock className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="mb-24 text-section capitalize leading-none"
          >
            our work philosopy
          </Heading>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h3" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                officia fugiat nam, magni impedit illum quasi accusamus amet
                natus consectetur repellendus explicabo dignissimos eos dolorum
                recusandae incidunt et modi. Ratione?
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h3" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                officia fugiat nam, magni impedit illum quasi accusamus amet
                natus consectetur repellendus explicabo dignissimos eos dolorum
                recusandae incidunt et modi. Ratione?
              </p>
            </div>
            <div className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2">
              <div>
                <span>Culture</span>
                <Heading as="h3" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                officia fugiat nam, magni impedit illum quasi accusamus amet
                natus consectetur repellendus explicabo dignissimos eos dolorum
                recusandae incidunt et modi. Ratione?
              </p>
            </div>
          </div>
        </Container>
      </SectionBlock>
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
      <SectionBlock className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="mb-24 text-section capitalize leading-none"
          >
            our team
          </Heading>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative col-span-1 h-[600px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1729386910612-c58172d922c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={320}
                height={450}
                className="h-full w-full object-cover"
                alt="Aerial view of a lush green area"
              />
              <div className="group absolute bottom-2 w-full overflow-hidden px-2 backdrop-blur-2xl">
                <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6 py-2 duration-300 group-hover:h-[240px]">
                  <div className="flex items-center justify-between">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Tom Smith
                    </Heading>
                    <span className="">CTO</span>
                    <Link href="#">
                      <LinkedIn2 />
                    </Link>
                  </div>
                  <ul className="duration300 my-4 h-0 translate-y-3 group-hover:h-full group-hover:translate-y-0">
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 h-[600px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1729386910612-c58172d922c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={320}
                height={450}
                className="h-full w-full object-cover"
                alt="Aerial view of a lush green area"
              />
              <div className="group absolute bottom-2 w-full overflow-hidden px-2 backdrop-blur-2xl">
                <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6 py-2 duration-300 group-hover:h-[240px]">
                  <div className="flex items-center justify-between">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Tom Smith
                    </Heading>
                    <span className="">CTO</span>
                    <Link href="#">
                      <LinkedIn2 />
                    </Link>
                  </div>
                  <ul className="duration300 my-4 h-0 translate-y-3 group-hover:h-full group-hover:translate-y-0">
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 h-[600px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1729386910612-c58172d922c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={320}
                height={450}
                className="h-full w-full object-cover"
                alt="Aerial view of a lush green area"
              />
              <div className="group absolute bottom-2 w-full overflow-hidden px-2 backdrop-blur-2xl">
                <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6 py-2 duration-300 group-hover:h-[240px]">
                  <div className="flex items-center justify-between">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Tom Smith
                    </Heading>
                    <span className="">CTO</span>
                    <Link href="#">
                      <LinkedIn2 />
                    </Link>
                  </div>
                  <ul className="duration300 my-4 h-0 translate-y-3 group-hover:h-full group-hover:translate-y-0">
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 h-[600px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1729386910612-c58172d922c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={320}
                height={450}
                className="h-full w-full object-cover"
                alt="Aerial view of a lush green area"
              />
              <div className="group absolute bottom-2 w-full overflow-hidden px-2 backdrop-blur-2xl">
                <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6 py-2 duration-300 group-hover:h-[240px]">
                  <div className="flex items-center justify-between">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Tom Smith
                    </Heading>
                    <span className="">CTO</span>
                    <Link href="#">
                      <LinkedIn2 />
                    </Link>
                  </div>
                  <ul className="duration300 my-4 h-0 translate-y-3 group-hover:h-full group-hover:translate-y-0">
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 h-[600px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1729386910612-c58172d922c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={320}
                height={450}
                className="h-full w-full object-cover"
                alt="Aerial view of a lush green area"
              />
              <div className="group absolute bottom-2 w-full overflow-hidden px-2 backdrop-blur-2xl">
                <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6 py-2 duration-300 group-hover:h-[240px]">
                  <div className="flex items-center justify-between">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Tom Smith
                    </Heading>
                    <span className="">CTO</span>
                    <Link href="#">
                      <LinkedIn2 />
                    </Link>
                  </div>
                  <ul className="duration300 my-4 h-0 translate-y-3 group-hover:h-full group-hover:translate-y-0">
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 h-[600px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1729386910612-c58172d922c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={320}
                height={450}
                className="h-full w-full object-cover"
                alt="Aerial view of a lush green area"
              />
              <div className="group absolute bottom-2 w-full overflow-hidden px-2 backdrop-blur-2xl">
                <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6 py-2 duration-300 group-hover:h-[240px]">
                  <div className="flex items-center justify-between">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Tom Smith
                    </Heading>
                    <span className="">CTO</span>
                    <Link href="#">
                      <LinkedIn2 />
                    </Link>
                  </div>
                  <ul className="duration300 my-4 h-0 translate-y-3 group-hover:h-full group-hover:translate-y-0">
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                    <li className="text-sub-title">4 years experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionBlock>
    </>
  );
}
