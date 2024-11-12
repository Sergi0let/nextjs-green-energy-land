"use client";

import { Container, Heading, SectionBlock, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/DynamicIcon";
import { MetricType } from "@/types/types";
import { capitalize } from "@/utils/utils";
import cx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export type MetricsProps = {
  metrics: {
    heading: string;
    tagline: string;
    Metrics: MetricType[];
  };
};

if (typeof window !== "undefined") {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}

function Metrics({ metrics }: MetricsProps) {
  const { heading, tagline, Metrics } = metrics;
  const resultRef = useRef<HTMLUListElement>(null);
  const firstResRef = useRef<HTMLLIElement>(null);
  const secondResRef = useRef<HTMLLIElement>(null);
  const thirdResRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (
      resultRef.current &&
      firstResRef.current &&
      secondResRef.current &&
      thirdResRef.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: resultRef.current,
          start: "top 50%",
          end: "top 0%",
          toggleActions: "restart none complete none",
          // markers: true,
        },
      });

      tl.to(firstResRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1,0,1)",
      });

      tl.to(secondResRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1,0,1)",
      });

      tl.to(thirdResRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1,0,1)",
      });
    }
  }, []);

  return (
    <SectionBlock className="rounded-3xl bg-beigie-primary">
      <Container>
        <SubTitle subTitle={tagline} className="text-black" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading
              as="h2"
              animate
              className="mb-8 w-full text-pretty text-section leading-none lg:w-1/2"
            >
              {heading}
            </Heading>
          </div>
          <ul ref={resultRef} className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {Metrics.filter((elem: MetricType) => elem.experts).map(
              (metric: MetricType, index: number) => (
                <li
                  key={index}
                  ref={index === 0 ? firstResRef : null}
                  className={cx(
                    "flex flex-col items-start gap-6 rounded-3xl bg-primary-300 p-10",
                    index === 0 && "-translate-x-full opacity-0",
                  )}
                >
                  <DynamicIcon name={capitalize(metric.icon)} />
                  <div>
                    <h3 className="mb-4 text-title font-medium leading-none">
                      {metric.heading}
                    </h3>
                    <h4 className="mb-6 text-sub-title font-medium">
                      {metric.tagline}
                    </h4>
                    <p className="to-neutral-900 text-base">{metric.experts}</p>
                  </div>
                </li>
              ),
            )}
            <li>
              <ul className="flex h-full flex-col justify-between gap-8">
                {Metrics.filter((elem: MetricType) => !elem.experts).map(
                  (metric: MetricType, index: number) => (
                    <li
                      key={index}
                      ref={
                        index === 0
                          ? secondResRef
                          : index === 1
                            ? thirdResRef
                            : null
                      }
                      className={cx(
                        "flex h-full gap-6 rounded-3xl bg-primary-300 p-8",
                        index === 0 && "-translate-y-full opacity-0",
                        index === 1 && "translate-y-full opacity-0",
                      )}
                    >
                      <DynamicIcon name={capitalize(metric.icon)} />
                      <div>
                        <h3 className="text-title leading-none">
                          {metric.heading}
                        </h3>
                        <h4 className="mt-4 text-sub-title">
                          {metric.tagline}
                        </h4>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </SectionBlock>
  );
}

export { Metrics };
