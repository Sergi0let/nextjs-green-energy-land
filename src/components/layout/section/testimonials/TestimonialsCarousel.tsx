"use client";

import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import { SolutionType } from "@/types/types";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export const TestimonialsCarousel = ({
  items,
}: {
  items: ReadonlyArray<SolutionType>;
}) => {
  const size = useWindowScreenSize();

  return (
    <Carousel
      stopOnHover={true}
      showThumbs={false}
      showStatus={false}
      interval={3500}
      showArrows={false}
      autoPlay
      showIndicators={false}
      centerMode
      centerSlidePercentage={
        (size.width < 640 && 85) || (size.width < 1024 && 40) || 33
      }
      infiniteLoop
      useKeyboardArrows
      className="cursor-disable w-screen max-w-7xl overflow-hidden duration-300"
    >
      {items.map(({ tagline, experts, image, heading }, index: number) => (
        <div
          key={index}
          className="mx-2 shrink-0 rounded-3xl bg-primary-300 p-10 sm:col-span-1"
        >
          <p className="min-h-[180px] text-left">{experts}</p>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="relative h-[56px] w-[56px] shrink-0">
              <Image
                src={image ?? ""}
                alt="Expert Image"
                width={90}
                height={90}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-black">
                <h3 className="text-sub-title">{heading}</h3>
                <p className="text-sm text-black opacity-90">{tagline}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
