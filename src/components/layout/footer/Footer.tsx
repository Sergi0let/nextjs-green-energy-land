import { Facebook, Instagram, LinkedIn2, Logo, WaveLines } from "@/components";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-4">
      <footer className="relative overflow-hidden rounded-3xl bg-secondary-950 py-24 sm:py-48">
        <div className="absolute">
          <WaveLines />
        </div>
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-6 xl:grid xl:grid-cols-12">
            <div className="col-span-3">
              <Logo />
            </div>
            <div className="col-span-9 grid gap-8 sm:grid-cols-9">
              <div className="col-span-3 grid w-full grid-cols-2 gap-4 sm:col-span-6 sm:grid-cols-3 sm:gap-0">
                <ul className="grid list-none gap-6 text-base text-neutral-300">
                  <li className="font-semibold text-white">Platform</li>
                  <li>
                    <Link href="/">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/">How it works</Link>
                  </li>
                  <li>
                    <Link href="/">Pricinga</Link>
                  </li>
                </ul>
                <ul className="grid list-none gap-6 text-base text-neutral-300">
                  <li className="font-semibold text-white">Company</li>

                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Our mission</Link>
                  </li>
                  <li>
                    <Link href="/">Careers</Link>
                    <span className="text-block ml-2 rounded bg-primary-300 p-1 text-sm text-black">
                      Hiring
                    </span>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
                <ul className="text-neutral-30 grid list-none gap-6 text-base text-neutral-300">
                  <li className="font-semibold text-white">Resources</li>

                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/">Support</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-3 grid gap-4 sm:col-end-10">
                <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary-300">
                    <Facebook />
                  </span>
                  <p className="font-medium text-white">
                    Follow us on Facebook
                  </p>
                </div>

                <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary-300">
                    <Instagram />
                  </span>
                  <p className="font-medium text-white">
                    Follow us on Instagram
                  </p>
                </div>

                <div className="flex items-center gap-4 rounded-full bg-white/25 p-1">
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary-300">
                    <LinkedIn2 />
                  </span>
                  <p className="font-medium text-white">
                    Follow us on LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
