"use client";

import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/DynamicIcon";
import { capitalize } from "@/utils/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

type FeaturesProps = {
  solutions: {
    heading: string;
    tagline: string;
    cta?: null | string;
    solutions: ReadonlyArray<{
      _key: string;
      experts: string;
      cta: { [key: string]: string };
      heading: string;
      _type: string;
      icon: string;
    }>;
  };
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Features({ solutions }: FeaturesProps) {
  const featureMain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxes = gsap.utils.toArray<HTMLElement>(".key-item");

    gsap.to(boxes, {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: featureMain.current,
        start: "top 70%",
        end: "bottom 10%",
        scrub: true,
        // markers: {
        //   startColor: "red",
        //   endColor: "skyblue",
        // },
      },
    });
  }, []);

  return (
    <SectionBlock className="ttl rounded-3xl bg-beigie-primary py-48">
      <Container className="container">
        <SubTitle subTitle={solutions?.tagline} className="text-black" />
        <div ref={featureMain}>
          <div className="mb-12 sm:mb-24">
            <Heading
              as="h2"
              animate
              className="relative text-section leading-none"
            >
              {solutions?.heading}
            </Heading>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {solutions?.solutions.map((solution) => (
              <li
                key={solution._key}
                className="key-item flex h-full translate-y-20 flex-col items-start justify-between opacity-0"
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
            ))}
          </ul>
        </div>
      </Container>
    </SectionBlock>
  );
}

export { Features };
