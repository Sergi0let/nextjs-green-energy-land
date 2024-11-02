"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutUsCarousel = ({ images }: { images: { url: string }[] }) => {
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
      renderIndicator={(onClickHandler, isSelected, index) => {
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
      {images?.map((slide: { url: string }, index: number) => (
        <div className="w-ful mx-3 h-full" key={index}>
          <Image
            src={slide.url}
            alt="About Us Carousel Image 1"
            width={420}
            height={530}
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export { AboutUsCarousel };
