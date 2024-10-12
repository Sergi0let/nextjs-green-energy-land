"use client";

import Logo from "@/components/elements/icons/Logo";
import Menu from "@/components/elements/icons/Menu";
import headerData from "@/data/header.json";
import useWindowScreenSize from "@/hooks/useWindowScreenSize";
import cx from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu((prev) => !prev);

  const size = useWindowScreenSize();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);

  return (
    <header className="border-b sm:border-none fixed bg-secondary-950 sm:bg-transparent w-full py-6">
      <div className="container flex justify-between gap-1 items-center">
        <div className="flex items-center gap-10 ">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <ul
            className={cx(
              "flex items-center sm:justify-start flex-wrap duration-300 sm:translate-y-0 ease-in-out transform absolute gap-x-8 gap-y-10 sm:gap-y-0 top-0 right-0 sm:relative sm:h-fit sm:w-fit h-screen w-screen text-white bg-secondary-950 flex-col justify-center sm:flex-row",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header?.map((item, index) => (
              <li key={index}>
                <Link className="capitalize whitespace-nowrap" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 z-10">
          <button
            onClick={handleToggleMenu}
            className="p-3 flex items-center border rounded-full sm:hidden"
          >
            <Menu />
          </button>
          <button className="hover:bg-primary-300 hover:text-black duration-300 border py-3 px-5 rounded-full text-white whitespace-nowrap">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
}
