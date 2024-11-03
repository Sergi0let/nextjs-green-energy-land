import {
  Container,
  ExpertsList,
  Heading,
  SectionBlock,
  SubTitle,
} from "@/components";
import { ItemType } from "@/types/types";

export type OurExpertsProps = {
  experts: {
    heading: string;
    excerpt: string;
    tagline: string;
    ourExperts: ItemType[];
  };
};

function OurExperts({ experts }: OurExpertsProps) {
  const { heading, excerpt, tagline, ourExperts } = experts;

  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <SubTitle subTitle={tagline} />

        <div>
          <div className="flex flex-col gap-4">
            <Heading
              as="h2"
              animate
              className="text-features leading-none text-white"
            >
              {heading}
            </Heading>
            <p className="text-neutral-400">{excerpt}</p>
          </div>
          <ExpertsList ourExperts={ourExperts} />
        </div>
      </Container>
    </SectionBlock>
  );
}
export { OurExperts };
