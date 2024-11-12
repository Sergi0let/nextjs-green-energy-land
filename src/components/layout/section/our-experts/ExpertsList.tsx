"use client";

import { LinkedIn } from "@/components/elements";
import { ItemType } from "@/types/types";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function ExpertsList({ ourExperts }: { ourExperts: ItemType[] }) {
  const expertsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      expertsRef.current.forEach((expert, i) => {
        gsap.to(expert, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: expertsRef.current[i],
            markers: false,
            toggleActions: "restart none complete none",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="mt-20">
      {ourExperts.map(
        ({ link, image, tagline, heading }: ItemType, index: number) => (
          <div
            key={index}
            className="expert-item opacity-1 flex translate-y-24 items-center gap-12 border-b border-neutral-700 py-8 opacity-0"
            ref={(el) => {
              if (el) expertsRef.current[index] = el;
            }}
          >
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src={image ?? ""}
                alt="Avatar 4"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">{heading}</h3>
              </div>
              <p className="text-left text-neutral-600">{tagline}</p>
              <Link href={link ?? ""}>
                <LinkedIn />
              </Link>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export { ExpertsList };
