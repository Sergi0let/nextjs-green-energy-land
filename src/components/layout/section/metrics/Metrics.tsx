import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/DynamicIcon";
import { getHomePageData } from "@/sanity/queries/page";
import { capitalize } from "@/utils/utils";

async function Metrics() {
  const data = await getHomePageData();
  const { heading, tagline, Metrics: metrics } = data?.metrics;
  console.log(metrics);
  return (
    <SectionBlock className="rounded-3xl bg-beigie-primary">
      <Container>
        <SubTitle subTitle={tagline} className="text-black" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading
              as="h2"
              className="mb-8 w-full text-pretty text-section leading-none lg:w-1/2"
            >
              {heading}
            </Heading>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <li className="flex flex-col items-start gap-6 rounded-3xl bg-primary-300 p-10">
              <DynamicIcon name={capitalize(metrics[0].icon)} />
              <div>
                <h3 className="mb-4 text-title font-medium leading-none">
                  {metrics[0].heading}
                </h3>
                <h4 className="mb-6 text-sub-title font-medium">
                  {metrics[0].tagline}
                </h4>
                <p className="to-neutral-900 text-base">{metrics[0].experts}</p>
              </div>
            </li>
            <li>
              <ul className="flex h-full flex-col justify-between gap-8">
                <li className="flex h-full gap-6 rounded-3xl bg-primary-300 p-8">
                  <DynamicIcon name={capitalize(metrics[1].icon)} />
                  <div>
                    <h3 className="text-title leading-none">
                      {metrics[1].heading}
                    </h3>
                    <h4 className="mt-4 text-sub-title">
                      {metrics[1].tagline}
                    </h4>
                  </div>
                </li>
                <li className="flex h-full gap-6 rounded-3xl bg-primary-300 p-8">
                  <DynamicIcon name={capitalize(metrics[2].icon)} />

                  <div>
                    <h3 className="text-title leading-none">
                      {metrics[2].heading}
                    </h3>
                    <h4 className="mt-4 text-sub-title">
                      {metrics[2].tagline}
                    </h4>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </SectionBlock>
  );
}

export { Metrics };
