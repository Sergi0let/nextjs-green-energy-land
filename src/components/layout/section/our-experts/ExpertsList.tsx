import { LinkedIn } from "@/components/elements";
import { ItemType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

function ExpertsList({ ourExperts }: { ourExperts: ItemType[] }) {
  return (
    <div className="mt-20">
      {ourExperts.map(
        ({ link, image, tagline, heading }: ItemType, index: number) => (
          <div
            key={index}
            className="expert-item flex translate-y-6 items-center gap-12 border-b border-neutral-700 py-8"
          >
            <div className="relative size-[90px] flex-shrink-0">
              <Image
                src={image ?? ""}
                alt="Avatar 4"
                width={90}
                height={90}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
              <div className="flex flex-col text-white sm:flex-row sm:gap-32">
                <h3 className="text-sub-title">{heading}</h3>
              </div>
              <p className="text-left text-neutral-600">{tagline}</p>
              <Link href={link ?? ""}>
                <LinkedIn />
              </Link>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export { ExpertsList };
