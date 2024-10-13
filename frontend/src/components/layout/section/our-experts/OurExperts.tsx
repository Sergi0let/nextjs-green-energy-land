import { LinkedIn } from "@/components/elements/icons/LinkedIn";
import Image from "next/image";
import Link from "next/link";

function OurExperts() {
  return (
    <section className="bg-secondary-950 py-48">
      <div className="container">
        <div className="mb-12 flex items-center gap-2 border-b border-neutral-300 pb-4 text-white sm:mb-14">
          <span className="h-3 w-3 rounded-full bg-primary-500" />
          <span>Our experts</span>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-features leading-none text-white">
              Meet our experts
            </h2>
            <p className="text-neutral-400">
              Our team boasts top green energy experts, driving innovation in
              sustainability.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-between gap-12 border-b border-neutral-700 py-8">
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src="/avatar/avatar-1.webp"
                alt="Avatar 1"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">Jenny Wilson</h3>
                <p className="text-neutral-600">
                  Senior Sustainability Consultant
                </p>
              </div>
              <Link href="#">
                <LinkedIn />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-12 border-b border-neutral-700 py-8">
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src="/avatar/avatar-2.webp"
                alt="Avatar 2"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">Cameron Williamson</h3>
                <p className="text-neutral-600">
                  Senior Sustainability Consultant
                </p>
              </div>
              <Link href="#">
                <LinkedIn />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-12 border-b border-neutral-700 py-8">
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src="/avatar/avatar-3.webp"
                alt="Avatar 3"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">Jenny Wilson</h3>
                <p className="text-neutral-600">
                  Senior Sustainability Consultant
                </p>
              </div>
              <Link href="#">
                <LinkedIn />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-12 border-b border-neutral-700 py-8">
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src="/avatar/avatar-4.webp"
                alt="Avatar 4"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">Courtney Henry</h3>
                <p className="text-neutral-600">Energy Analysts</p>
              </div>
              <Link href="#">
                <LinkedIn />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-12 border-b border-neutral-700 py-8">
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src="/avatar/avatar-3.webp"
                alt="Avatar 3"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">Dianne Russell</h3>
                <p className="text-neutral-600">
                  Senior Renewable Energy Engineer
                </p>
              </div>
              <Link href="#">
                <LinkedIn />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-12 border-b border-neutral-700 py-8">
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src="/avatar/avatar-4.webp"
                alt="Avatar 4"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">Brooklyn Simmons</h3>
                <p className="text-neutral-600">Renewable Energy Engineer</p>
              </div>
              <Link href="#">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { OurExperts };
