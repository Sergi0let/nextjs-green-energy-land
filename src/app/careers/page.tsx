import {
  ArrowUpRight,
  Container,
  Heading,
  LocationIcon,
  SectionBlock,
  SubTitle,
} from "@/components";
import { ClockIcon } from "@/components/elements/icons/ClockIcon";
import { getCareersPage } from "@/sanity/queries/page";
import { DepartmentType } from "@/types/types";
import Link from "next/link";

export default async function CareersPage() {
  const data = await getCareersPage();
  const { hero, jobBoard } = data;
  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Careers" />
        <div>
          <Heading className="text-hero leading-none text-white" as="h1">
            {hero.heading}
          </Heading>
          <p className="mt-6 text-base text-neutral-300">{hero.tagline}</p>
        </div>
        {jobBoard.map((item: DepartmentType, index: number) => {
          return (
            <div key={index} className="mt-12">
              <Heading as="h3" className="mb-8 text-sub-title text-white">
                {item.department}
              </Heading>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {item?.available.map((job, index) => (
                  <Link
                    href={job.link ?? ""}
                    target="_blank"
                    key={index}
                    className="group rounded-3xl border-t-4 bg-primary-300 px-8 py-6 duration-300 hover:border-primary-300 hover:bg-white"
                  >
                    <Heading as="h4" className="text-label font-medium">
                      {job.title}
                    </Heading>
                    <div className="mt-4 flex gap-2">
                      <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                        <LocationIcon />
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap duration-300 group-hover:bg-primary-300">
                          {job.location}
                        </span>
                      </span>
                      <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                        <ClockIcon />
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                          {job.type}
                        </span>
                      </span>
                    </div>
                    <span className="mt-4 flex items-center gap-1 font-medium">
                      Apply
                      <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </SectionBlock>
  );
}
