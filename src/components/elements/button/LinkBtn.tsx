"use client";

import { useGSAP } from "@gsap/react";
import cx from "clsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link";
gsap.registerPlugin(TextPlugin);

type LinkBtnProps = {
  href: string;
  title: string;
  className?: string;
  animDelay?: number;
  animText?: string;
};

const LinkBtn = ({
  href = "/",
  title = " ",
  className = "",
  animDelay = 0,
  animText = "",
}: LinkBtnProps) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".link-anim", {
      duration: 4,
      text: {
        value: animText,
        delimiter: "",
      },
      ease: "power2",
      delay: animDelay,
    });

    tl.to(".link-anim", {
      duration: 1,
      transform: "matrix(1.01,0.15,0.15,0.99,0,0)",
      ease: "bounce",
    });
    tl.to(".link-anim", {
      duration: 1,
      transform: "matrix(1,0,0,1,0,0)",
      ease: "bounce",
    });
  }, []);
  return (
    <Link href={href} className={cx(className, "group")}>
      <span className="link-anim inline-block rounded-full bg-primary-300 px-24 py-6 text-lg font-semibold">
        {title}
      </span>
    </Link>
  );
};

export { LinkBtn };
