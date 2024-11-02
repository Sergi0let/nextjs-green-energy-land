import { Container, LinkedIn, SectionBlock, SubTitle } from "@/components";
import { getHomePageData } from "@/sanity/queries/page";
import { ItemType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

async function OurExperts() {
  const data = await getHomePageData();
  const { heading, excerpt, tagline, ourExperts } = data.ourExpert;

  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <SubTitle subTitle={tagline} />

        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-features leading-none text-white">{heading}</h2>
            <p className="text-neutral-400">{excerpt}</p>
          </div>
        </div>

        <div className="mt-20">
          {ourExperts.map(
            ({ link, image, tagline, heading }: ItemType, index: number) => (
              <div
                key={index}
                className="flex items-center gap-12 border-b border-neutral-700 py-8"
              >
                <div className="relative size-[90px] flex-shrink-0">
                  <Image
                    src={image ?? ""}
                    alt="Avatar 4"
                    width={90}
                    height={90}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
                  <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                    <h3 className="text-sub-title">{heading}</h3>
                  </div>
                  <p className="text-left text-neutral-600">{tagline}</p>
                  <Link href={link ?? ""}>
                    <LinkedIn />
                  </Link>
                </div>
              </div>
            ),
          )}
        </div>
      </Container>
    </SectionBlock>
  );
}
export { OurExperts };
