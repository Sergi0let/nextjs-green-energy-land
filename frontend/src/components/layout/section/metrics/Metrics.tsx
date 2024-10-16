import {
  Container,
  Heading,
  Organic,
  SectionBlock,
  SubTitle,
  SunLight,
} from "@/components";

function Metrics() {
  return (
    <SectionBlock className="rounded-3xl bg-beigie-primary">
      <Container>
        <SubTitle subTitle="Metrics" className="text-black" />

        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              We are committed to a sustainable future
            </Heading>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <li className="flex flex-col items-start gap-6 rounded-3xl bg-primary-300 p-10">
              <SunLight />
              <div>
                <h3 className="mb-4 text-title font-medium leading-none">
                  5,000 Mwh
                </h3>
                <h4 className="mb-6 text-sub-title font-medium">
                  Renewable Energy Generated
                </h4>
                <p className="to-neutral-900 text-base">
                  Our commitment to sustainability shines through as we proudly
                  announce the generation of 5,000 megawatt-hours of renewable
                  energy, contributing to a greener and more environmentally
                  friendly future.
                </p>
              </div>
            </li>
            <li>
              <ul className="flex h-full flex-col justify-between gap-8">
                <li className="flex h-full gap-6 rounded-3xl bg-primary-300 p-8">
                  <SunLight />
                  <div>
                    <h3 className="text-title leading-none">10,000+</h3>
                    <h4 className="mt-4 text-sub-title">Customers Served</h4>
                  </div>
                </li>
                <li className="flex h-full gap-6 rounded-3xl bg-primary-300 p-8">
                  <Organic />
                  <div>
                    <h3 className="text-title leading-none">15%</h3>
                    <h4 className="mt-4 text-sub-title">Avg. Energy Saved</h4>
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
