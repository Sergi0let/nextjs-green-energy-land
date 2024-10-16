"use client";

import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
export const TestimonialsCarousel = () => {
  const size = useWindowScreenSize();

  return (
    <Carousel
      emulateTouch={true}
      swipeScrollTolerance={1}
      stopOnHover={true}
      swipeable={true}
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
      <div className="mx-2 shrink-0 rounded-3xl bg-primary-300 p-10 sm:col-span-1">
        <p className="min-h-[180px] text-left">Some Name</p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-[56px] w-[56px] shrink-0">
            <Image
              src="/avatar/avatar-1.webp"
              alt="Expert Image"
              width={90}
              height={90}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
            <div className="flex flex-col text-black">
              <h3 className="text-sub-title">Heading</h3>
              <p className="text-sm text-black opacity-90">Expert Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 shrink-0 rounded-3xl bg-primary-300 p-10 sm:col-span-1">
        <p className="min-h-[180px] text-left">Some Name</p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-[56px] w-[56px] shrink-0">
            <Image
              src="/avatar/avatar-1.webp"
              alt="Expert Image"
              width={90}
              height={90}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
            <div className="flex flex-col text-black">
              <h3 className="text-sub-title">Heading</h3>
              <p className="text-sm text-black opacity-90">Expert Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 shrink-0 rounded-3xl bg-primary-300 p-10 sm:col-span-1">
        <p className="min-h-[180px] text-left">Some Name</p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-[56px] w-[56px] shrink-0">
            <Image
              src="/avatar/avatar-1.webp"
              alt="Expert Image"
              width={90}
              height={90}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
            <div className="flex flex-col text-black">
              <h3 className="text-sub-title">Heading</h3>
              <p className="text-sm text-black opacity-90">Expert Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 shrink-0 rounded-3xl bg-primary-300 p-10 sm:col-span-1">
        <p className="min-h-[180px] text-left">Some Name</p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-[56px] w-[56px] shrink-0">
            <Image
              src="/avatar/avatar-1.webp"
              alt="Expert Image"
              width={90}
              height={90}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
            <div className="flex flex-col text-black">
              <h3 className="text-sub-title">Heading</h3>
              <p className="text-sm text-black opacity-90">Expert Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 shrink-0 rounded-3xl bg-primary-300 p-10 sm:col-span-1">
        <p className="min-h-[180px] text-left">Some Name</p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-[56px] w-[56px] shrink-0">
            <Image
              src="/avatar/avatar-1.webp"
              alt="Expert Image"
              width={90}
              height={90}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
            <div className="flex flex-col text-black">
              <h3 className="text-sub-title">Heading</h3>
              <p className="text-sm text-black opacity-90">Expert Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 shrink-0 rounded-3xl bg-primary-300 p-10 sm:col-span-1">
        <p className="min-h-[180px] text-left">Some Name</p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-[56px] w-[56px] shrink-0">
            <Image
              src="/avatar/avatar-1.webp"
              alt="Expert Image"
              width={90}
              height={90}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
            <div className="flex flex-col text-black">
              <h3 className="text-sub-title">Heading</h3>
              <p className="text-sm text-black opacity-90">Expert Name</p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
