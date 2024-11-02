import { Button, Check, Container, Heading, SectionBlock } from "@/components";
import DynamicIcon from "@/components/elements/icons/DynamicIcon";
import { getPricePage } from "@/sanity/queries/page";
import { PricingPlan } from "@/types/types";
import { capitalize } from "@/utils/utils";
import cx from "clsx";
import Link from "next/link";

export default async function PricingPage() {
  const data = await getPricePage();
  const { consultation, pricing, hero } = data;
  console.log("🚀 ~ PricingPage ~ pricing:", pricing);

  return (
    <SectionBlock className="bg-white">
      <Container>
        <div>
          <Heading as="h1" className="text-hero">
            {hero?.heading}
          </Heading>
          <p className="mt-6 max-w-xl text-base">{hero?.tagline}</p>
        </div>
        <div className="my-12 grid grid-cols-1 gap-8 sm:my-24 sm:grid-cols-1 xl:grid-cols-3">
          {pricing?.availablePlan?.map((plan: PricingPlan, index: number) => (
            <div
              key={index}
              className={cx(
                "relative col-span-2 overflow-hidden rounded-xl px-8 pb-8 pt-14 shadow-xl md:col-span-1",
                plan.recommended
                  ? "border-none bg-secondary-950 text-white"
                  : "border-t-4 border-primary-300",
              )}
            >
              {plan.recommended && (
                <p className="absolute right-0 top-0 w-full bg-primary-300 py-2 text-center text-black">
                  Recommended
                </p>
              )}
              <span className="mb-4 text-sub-title">{plan?.plan}</span>
              <Heading
                as="h2"
                className="flex items-center gap-4 text-features"
              >
                ${plan?.price}
                <span className="text-label font-semibold text-neutral-500">
                  {plan?.time}
                </span>
              </Heading>
              <p className="mt-6">{plan?.desc}</p>
              <Button
                className="mt-8 w-full py-4"
                variant={plan.recommended ? "tetriary-reversed" : "tetriary"}
              >
                {plan?.cta?.title}
              </Button>
              <div>
                <Heading as="h3" className="my-4">
                  Whats included
                </Heading>
                <ul className="grid gap-2">
                  {plan.benefits?.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary-300 p-10 shadow-xl md:flex-row">
          <div>
            <DynamicIcon name={capitalize(consultation?.icon)} />
          </div>
          <div>
            <Heading as="h3" className="mb-2 text-label font-medium">
              {consultation?.heading}
            </Heading>
            <p className="text-primary-950">{consultation?.experts}</p>
          </div>
          <Link
            href={consultation?.cta?.link}
            className="focus:ring-400 h-fit shrink-0 rounded-full bg-white px-5 py-4 font-semibold text-secondary-950 duration-300 hover:bg-secondary-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {consultation?.cta?.title}
          </Link>
        </div>
      </Container>
    </SectionBlock>
  );
}
