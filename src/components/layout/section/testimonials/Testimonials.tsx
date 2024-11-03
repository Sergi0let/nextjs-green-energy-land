"use client";

import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import { TestimonialType } from "@/types/types";
import dynamic from "next/dynamic";

const TestimonialsCarouselDynamic = dynamic(
  () =>
    import("./TestimonialsCarousel").then((mod) => mod.TestimonialsCarousel),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

type TestimonialsProps = {
  data: TestimonialType;
};

function Testimonials({ data }: TestimonialsProps) {
  const { tagline, heading, solutions } = data;
  return (
    <SectionBlock className="rounded-3xl bg-secondary-950">
      <Container className="flex flex-col items-center">
        <SubTitle subTitle={tagline} />

        <Heading
          as="h2"
          animate
          className="w-full text-center text-section leading-none text-white"
        >
          {heading}
        </Heading>

        <div className="mt-24 overflow-hidden">
          <TestimonialsCarouselDynamic items={solutions} />
        </div>
      </Container>
    </SectionBlock>
  );
}

export { Testimonials };
