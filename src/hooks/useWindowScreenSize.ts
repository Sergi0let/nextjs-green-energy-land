import { useEffect, useState } from "react";

type ScreenSize = {
  width: number;
  height: number;
};

export default function useWindowScreenSize(): ScreenSize {
  // Перевіряємо, чи працюємо в середовищі клієнта
  const [size, setSize] = useState<ScreenSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Перевіряємо, чи існує window (тільки на стороні клієнта)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      // Очищуємо слухача події при розмонтуванні компонента
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return size;
}
