import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/DynamicIcon";
import { getHomePageData } from "@/sanity/queries/page";
import { capitalize } from "@/utils/utils";
import Link from "next/link";

// type FeaturesProps = {
//   solutions: {
//     heading: string;
//     tagline: string;
//     cta?: null | string;
//     solutions: ReadonlyArray<{
//       _key: string;
//       experts: string;
//       cta: { [key: string]: string };
//       heading: string;
//       _type: string;
//       icon: string;
//     }>;
//   };
// };

async function Features() {
  const { solutions } = await getHomePageData();

  return (
    <SectionBlock className="rounded-3xl bg-beigie-primary py-48">
      <Container className="container">
        <SubTitle subTitle={solutions?.tagline} className="text-black" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              {solutions?.heading + "rex"}
            </Heading>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {solutions?.solutions.map(
              (solution: {
                _key: string;
                experts: string;
                cta: { [key: string]: string };
                heading: string;
                _type: string;
                icon: string;
              }) => (
                <li
                  key={solution._key}
                  className="gap- flex h-full flex-col items-start justify-between"
                >
                  <DynamicIcon name={capitalize(solution?.icon || "")} />
                  <div className="mt-6">
                    <h3 className="mb-4 text-sub-title font-medium leading-none">
                      {solution?.heading}
                    </h3>
                    <p className="text-base text-neutral-900">
                      {solution?.experts}
                    </p>
                  </div>
                  <Link
                    href={solution?.cta?.url ?? "/pricing"}
                    className="group relative mt-6 overflow-hidden text-base font-medium text-neutral-950 duration-300"
                  >
                    {solution?.cta?.title}
                    <span className="absolute -left-full bottom-0 h-[1px] w-full bg-primary-950 duration-300 group-hover:left-0" />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </SectionBlock>
  );
}

export { Features };