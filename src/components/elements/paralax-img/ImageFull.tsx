"use client";
import cx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageFullProps = {
  src: string;
  alt: string;
  className?: string;
};

function ImageFull({ src, alt, className }: ImageFullProps) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5); // Налаштуйте множник для зміни інтенсивності ефекту
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <figure className={cx("parallax-container", className)}>
      <Image
        src={src}
        width={1200}
        height={800}
        alt={alt}
        style={{
          transform: `translateY(${offsetY}px)`, // зсув зображення на основі прокрутки
        }}
        className="parallax-image"
      />
    </figure>
  );
}
export { ImageFull };
