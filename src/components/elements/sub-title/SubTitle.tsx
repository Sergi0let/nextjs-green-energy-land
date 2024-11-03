"use client";

import { useGSAP } from "@gsap/react";
import cx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type SubTitleProps = {
  className?: string;
  subTitle: string;
};

function SubTitle({ className, subTitle }: SubTitleProps) {
  const main = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLSpanElement>(dotRef.current);
      boxes.forEach((box) => {
        gsap.to(box, {
          y: 0,
          opacity: 1,
          delay: 1.5,
          duration: 1,
          ease: "bounce",
          scrollTrigger: {
            trigger: box,
            start: "bottom 70%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      });

      const text = gsap.utils.toArray<HTMLSpanElement>(textRef.current);
      text.forEach((t) => {
        gsap.to(t, {
          x: 0,
          opacity: 1,
          delay: 0.5,
          duration: 1,
          ease: "easeOut",
          scrollTrigger: {
            trigger: t,
            start: "top 70%",
            end: "top 20%",
          },
        });
      });
    },
    { scope: main },
  );

  return (
    <div
      ref={main}
      className="mb-12 flex w-full items-center gap-2 border-b border-neutral-300 pb-4 text-white sm:mb-14"
    >
      <span
        ref={dotRef}
        className="relative block size-2 -translate-y-12 rounded-full bg-primary-300 opacity-0"
      />
      <span
        ref={textRef}
        className={cx(
          "box transltate-y-6 translate-x-20 text-xl font-bold opacity-0",
          className,
        )}
      >
        {subTitle}
      </span>
    </div>
  );
}

export { SubTitle };
