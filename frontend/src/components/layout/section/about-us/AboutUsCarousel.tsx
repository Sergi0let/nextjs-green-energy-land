"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutUsCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swipeable
      transitionTime={300}
      useKeyboardArrows
      showThumbs={false}
      interval={3000}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const className = isSelected ? "dot selected" : "dot";
        return (
          <li
            className={className}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
          />
        );
      }}
    >
      <div className="w-ful h-full">
        <Image
          src="/hero/hero-1.webp"
          alt="About Us Carousel Image 1"
          width={420}
          height={530}
          className="w-full object-cover h-full rounded-3xl"
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="/hero/hero-2.webp"
          alt="About Us Carousel Image 1"
          width={420}
          height={530}
          className="w-full object-cover h-full rounded-3xl"
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="/hero/hero-3.webp"
          alt="About Us Carousel Image 3"
          width={420}
          height={530}
          className="w-full object-cover h-full rounded-3xl"
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="/hero/hero-4.webp"
          alt="About Us Carousel Image 1"
          width={420}
          height={530}
          className="w-full object-cover h-full rounded-3xl"
        />
      </div>
    </Carousel>
  );
};

export { AboutUsCarousel };
