import { Heading, LinkedIn2 } from "@/components/elements";
import { ItemType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

function ChampionCard({ heading, tagline, experts, image, link }: ItemType) {
  return (
    <div className="relative col-span-1 h-[600px] overflow-hidden rounded-xl">
      <Image
        src={image ?? ""}
        width={320}
        height={450}
        className="h-full w-full object-cover"
        alt="Aerial view of a lush green area"
      />
      <div className="group absolute bottom-2 w-full overflow-hidden px-2 backdrop-blur-2xl">
        <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6 py-2 duration-300 group-hover:h-[240px]">
          <div className="flex items-center justify-between">
            <Heading as="h4" className="text-label font-semibold leading-none">
              {heading}
            </Heading>
            <span className="">{tagline}</span>
            <Link href={link ?? ""} target="_blank">
              <LinkedIn2 />
            </Link>
          </div>
          <div className="duration300 my-4 h-0 translate-y-3 group-hover:h-full group-hover:translate-y-0">
            {experts}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ChampionCard };
