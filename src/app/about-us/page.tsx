import {
  Container,
  Heading,
  ImageFull,
  NewLetter,
  SectionBlock,
} from "@/components";
import { ChampionCard } from "@/components/layout/cards/ChampionCard";
import { getAboutPage } from "@/sanity/queries/page";
import { ItemType } from "@/types/types";
import Link from "next/link";

export default async function AboutUsPage() {
  const data = await getAboutPage();
  const { hero, promotion, ourPhilosophy, ourExpert } = data;

  return (
    <>
      <SectionBlock className="bg-white">
        <Container className="py-0">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Heading animate className="text-hero" as="h1">
              {hero?.heading}
            </Heading>
            <div>
              <p className="mb-4">{hero?.tagline}</p>
              <Link href={promotion?.link} className="mt-4 inline-block">
                <span className="rounded-full bg-primary-300 px-5 py-4 font-semibold duration-300 hover:bg-primary-400">
                  {promotion?.title}
                </span>
              </Link>
            </div>
          </div>

          {/* <div className="mt-4 grid gap-4 md:h-screen md:grid-cols-4 md:grid-rows-4">
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
          </div> */}
        </Container>
        <ImageFull
          src={hero?.heroImage}
          alt="About Us"
          className="mb-24 mt-10 flex max-h-96 w-full items-center justify-center overflow-hidden object-top"
        />
        <Container>
          <Heading
            as="h2"
            animate
            className="mb-24 text-section capitalize leading-none"
          >
            {ourPhilosophy?.heading}
          </Heading>
          <div className="grid grid-cols-1 gap-4">
            {ourPhilosophy?.philosophys?.map(
              ({ heading, tagline, experts }: ItemType, index: number) => (
                <div
                  key={index}
                  className="grid space-y-4 rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2"
                >
                  <div>
                    <span>{tagline}</span>
                    <Heading as="h3" className="text-title leading-none">
                      {heading}
                    </Heading>
                  </div>
                  <p>{experts}</p>
                </div>
              ),
            )}
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
            animate
            className="mb-24 text-section capitalize leading-none"
          >
            {ourExpert?.heading}
          </Heading>
          <div className="grid gap-4 md:grid-cols-3">
            {ourExpert?.ourExperts.map((expert: ItemType, index: number) => (
              <ChampionCard key={index} {...expert} />
            ))}
          </div>
        </Container>
      </SectionBlock>
    </>
  );
}
