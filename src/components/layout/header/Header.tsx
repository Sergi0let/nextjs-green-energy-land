"use client";

import { Button, Logo, Menu } from "@/components";
import headerData from "@/data/header.json";
import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import useDetectScroll from "@smakss/react-scroll-direction";
import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const isSanityStudios = pathname.startsWith("/admin");
  const [showMenu, setShowMenu] = useState(false);
  const { scrollDir } = useDetectScroll();

  const handleToggleMenu = () => setShowMenu((prev) => !prev);

  const size = useWindowScreenSize();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);

  return (
    <header
      className={cx(
        "fixed z-0 w-full border-b border-primary-300 bg-secondary-950 py-6 duration-300",
        scrollDir === "down" ? "-translate-y-full" : "translate-y-0",
        isSanityStudios ? "z-0" : "z-20",
      )}
    >
      <div className="container flex items-center justify-between gap-1">
        <div className="flex items-center gap-10">
          <Link href="/" aria-label="Home" className="z-10">
            <Logo />
          </Link>
          <ul
            className={cx(
              "absolute right-0 top-0 flex h-screen w-screen transform flex-col flex-wrap items-center justify-center gap-x-8 gap-y-10 bg-secondary-950 text-white duration-300 ease-in-out sm:relative sm:h-fit sm:w-fit sm:translate-y-0 sm:flex-row sm:justify-start sm:gap-y-0 sm:bg-transparent",
              showMenu === true ? "translate-y-0" : "-translate-y-full",
            )}
          >
            {headerData.header?.map((item, index) => (
              <li key={index}>
                <Link className="whitespace-nowrap capitalize" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="z-10 flex gap-3">
          <button
            onClick={handleToggleMenu}
            className="flex items-center rounded-full border p-3 sm:hidden"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>

          <Button variant="tetriary-reversed">Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
