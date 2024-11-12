"use client";

import {
  Check,
  Container,
  Heading,
  SectionBlock,
  SubTitle,
} from "@/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { AboutUsCarousel } from "./AboutUsCarousel";

export type AboutProps = {
  about: {
    heading: string;
    excerpt?: string;
    tagline: string;
    solutions: [{ heading: string; _key: string }];
    slider: [{ url: string }];
  };
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = ({ about }: AboutProps) => {
  const { heading, tagline, excerpt, solutions, slider } = about;
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const txtAboutUsRef = useRef<HTMLHeadingElement>(null);
  const listItemRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const aboutUsTl = aboutUsRef.current;

    gsap.to(txtAboutUsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: aboutUsTl,
        start: "top 50%",
        end: "top 0%",
        toggleActions: "restart none complete none",
        markers: false,
      },
    });

    if (listItemRef.current) {
      const items = gsap.utils.toArray(listItemRef.current.children);
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: aboutUsTl,
          start: "top 50%",
          end: "top 0%",
          toggleActions: "restart none complete none",
          markers: false,
        },
      });
    }
  }, []);

  return (
    <SectionBlock className="bg-secondary-950 py-48">
      <Container className="container">
        <SubTitle subTitle={tagline} />
        <div className="grid gap-12 md:gap-36 lg:grid-cols-2">
          <div ref={aboutUsRef} className="flex flex-col justify-center gap-6">
            <Heading
              as="h2"
              animate
              className="text-wrap text-section leading-none text-white"
            >
              {heading}
            </Heading>
            <p
              ref={txtAboutUsRef}
              className="translate-y-50 text-base text-white/80 opacity-0"
            >
              {excerpt}
            </p>
            <ul
              ref={listItemRef}
              className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-1"
            >
              {solutions.map(({ heading, _key }: { [key: string]: string }) => (
                <li
                  key={_key}
                  className="flex translate-y-12 items-start gap-3 text-white opacity-0"
                >
                  <span className="h-6 w-6">
                    <Check />
                  </span>
                  {heading}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-us-carousel col-span-1">
            <AboutUsCarousel images={slider} />
          </div>
        </div>
      </Container>
    </SectionBlock>
  );
};

export { AboutUs };
