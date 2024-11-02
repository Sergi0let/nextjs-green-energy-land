import {
  ArrowUpRight,
  Button,
  Container,
  Heading,
  LocationIcon,
  SectionBlock,
} from "@/components";
import { ClockIcon } from "@/components/elements/icons/ClockIcon";

export default function CareersPage() {
  return (
    <SectionBlock className="bg-secondary-950">
      <Container>
        <div>
          <Heading className="text-hero leading-none text-white" as="h1">
            Join our team
          </Heading>
          <p className="mt-6 text-base text-neutral-300">
            Our philosophy is simple – make the world a greener place.
          </p>
        </div>
        <div className="mt-12 grid gap-16 sm:mt-24">
          <div>
            <Heading as="h3" className="mb-8 text-sub-title text-white">
              Research and Development (R&D)
            </Heading>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-3xl border-t-4 bg-primary-300 px-8 py-6 duration-300 hover:border-primary-300 hover:bg-white">
                <Heading as="h4" className="text-label font-medium">
                  Renewable Energy Researcher
                </Heading>
                <div className="mt-4 flex gap-2">
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <LocationIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      San Francisco, US
                    </span>
                  </span>
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <ClockIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Full-Time
                    </span>
                  </span>
                </div>
                <Button className="mt-4 flex items-center gap-1 font-medium">
                  Apply
                  <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                </Button>
              </div>
              <div className="duraton-300 group rounded-3xl border-t-4 bg-primary-300 px-8 py-6 hover:border-primary-300 hover:bg-white">
                <Heading as="h4" className="text-label font-medium">
                  Materials Scientist
                </Heading>
                <div className="mt-4 flex gap-2">
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <LocationIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap duration-300 group-hover:bg-primary-300">
                      San Francisco, US
                    </span>
                  </span>
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <ClockIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Full-Time
                    </span>
                  </span>
                </div>
                <Button className="mt-4 flex items-center gap-1 font-medium">
                  Apply
                  <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-16 sm:mt-24">
          <div>
            <Heading as="h3" className="mb-8 text-sub-title text-white">
              Engineering
            </Heading>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-3xl border-t-4 bg-primary-300 px-8 py-6 duration-300 hover:border-primary-300 hover:bg-white">
                <Heading as="h4" className="text-label font-medium">
                  Renewable Energy Researcher
                </Heading>
                <div className="mt-4 flex gap-2">
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <LocationIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      San Francisco, US
                    </span>
                  </span>
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <ClockIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Full-Time
                    </span>
                  </span>
                </div>
                <Button className="mt-4 flex items-center gap-1 font-medium">
                  Apply
                  <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                </Button>
              </div>
              <div className="duraton-300 group rounded-3xl border-t-4 bg-primary-300 px-8 py-6 hover:border-primary-300 hover:bg-white">
                <Heading as="h4" className="text-label font-medium">
                  Solar Engineer
                </Heading>
                <div className="mt-4 flex gap-2">
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <LocationIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap duration-300 group-hover:bg-primary-300">
                      Fresno, US
                    </span>
                  </span>
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <ClockIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Full-Time
                    </span>
                  </span>
                </div>
                <Button className="mt-4 flex items-center gap-1 font-medium">
                  Apply
                  <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                </Button>
              </div>
              <div className="duraton-300 group rounded-3xl border-t-4 bg-primary-300 px-8 py-6 hover:border-primary-300 hover:bg-white">
                <Heading as="h4" className="text-label font-medium">
                  Electrical Engineer
                </Heading>
                <div className="mt-4 flex gap-2">
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <LocationIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap duration-300 group-hover:bg-primary-300">
                      Fresno, US
                    </span>
                  </span>
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <ClockIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Full-Time
                    </span>
                  </span>
                </div>
                <Button className="mt-4 flex items-center gap-1 font-medium">
                  Apply
                  <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                </Button>
              </div>
              <div className="duraton-300 group rounded-3xl border-t-4 bg-primary-300 px-8 py-6 hover:border-primary-300 hover:bg-white">
                <Heading as="h4" className="text-label font-medium">
                  Wind Energy Engineer
                </Heading>
                <div className="mt-4 flex gap-2">
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <LocationIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap duration-300 group-hover:bg-primary-300">
                      San Francisco, US
                    </span>
                  </span>
                  <span className="flex min-w-10 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-neutral-300 bg-white px-2 py-1 duration-300 group-hover:bg-primary-300">
                    <ClockIcon />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Full-Time
                    </span>
                  </span>
                </div>
                <Button className="mt-4 flex items-center gap-1 font-medium">
                  Apply
                  <ArrowUpRight className="duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionBlock>
  );
}
