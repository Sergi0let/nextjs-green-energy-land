"use client";

import { SolutionType } from "@/types/types";
import cx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export const TestimonialsCarousel = ({
  items,
}: {
  items: ReadonlyArray<SolutionType>;
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => setActiveSlide(index);

  return (
    <div className="">
      <Carousel
        className="testimonials-carousel"
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        selectedItem={0}
        axis="horizontal"
        centerMode
        centerSlidePercentage={33.333}
        onChange={handleSlideChange}
        onClickItem={(index) => console.log("onClickItem", index)}
        useKeyboardArrows={true}
        stopOnHover={true}
        interval={3000}
        transitionTime={1500}
      >
        {items.map(({ tagline, experts, image, heading }, index: number) => (
          <div
            key={index}
            className={cx(
              "shrink-0 rounded-3xl bg-primary-300 p-10 transition-all duration-1000 sm:col-span-1",
              index === activeSlide ? "scale-100" : "scale-90",
            )}
          >
            <p className="min-h-[180px] text-left">{experts}</p>
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative h-[90px] w-[90px] shrink-0">
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
    </div>
  );
};
