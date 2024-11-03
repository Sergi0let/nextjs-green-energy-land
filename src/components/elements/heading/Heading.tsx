"use client";

import cx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  animate?: boolean;
}

const Heading = ({
  as,
  className,
  children,
  animate = false,
}: HeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (animate && headingRef.current) {
      const letters = headingRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, [animate]);

  const HeadingTag = as;

  return (
    <HeadingTag ref={headingRef} className={cx(className)}>
      {animate
        ? String(children)
            .split("")
            .map((char, index) => (
              <span key={index} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))
        : children}
    </HeadingTag>
  );
};

export { Heading };
