"use client";

import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import dynamic from "next/dynamic";

const TestimonialsCarouselDynamic = dynamic(
  () =>
    import("./TestimonialsCarousel").then((mod) => mod.TestimonialsCarousel),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
function Testimonials() {
  return (
    <SectionBlock className="rounded-3xl bg-secondary-950">
      <Container className="flex flex-col items-center">
        <SubTitle subTitle="Testimonials" />

        <Heading
          as="h2"
          className="w-full text-center text-section leading-none text-white"
        >
          What our customers are saying about us?
        </Heading>

        <div className="mt-24">
          <TestimonialsCarouselDynamic />
        </div>
      </Container>
    </SectionBlock>
  );
}

export { Testimonials };
