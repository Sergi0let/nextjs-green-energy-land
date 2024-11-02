"use client";

import {
  Button,
  Check,
  Container,
  Heading,
  Organic,
  SectionBlock,
} from "@/components";
import cx from "clsx";
import { useState } from "react";

export default function PricingPage() {
  const [recomended] = useState(true);
  return (
    <SectionBlock className="bg-white">
      <Container>
        <div>
          <Heading as="h1" className="text-hero">
            Pricing
          </Heading>
          <p className="mt-6 max-w-xl text-base">
            Our pricing plans are simple and designed to cater to households and
            companies of various sizes. Choose a plan that suits your needs and
            budget.
          </p>
        </div>
        <div className="my-12 grid grid-cols-1 gap-8 sm:my-24 sm:grid-cols-1 xl:grid-cols-3">
          <div
            className={cx(
              "relative col-span-2 overflow-hidden rounded-xl px-8 pb-8 pt-14 shadow-xl md:col-span-1",
              recomended === false
                ? "border-none bg-secondary-950 text-white"
                : "border-t-4 border-primary-300",
            )}
          >
            {recomended === false && (
              <p className="absolute right-0 top-0 w-full bg-primary-300 py-2 text-center text-black">
                Recommended
              </p>
            )}
            <span className="mb-4 text-sub-title">Basic</span>
            <Heading as="h2" className="flex items-center gap-4 text-features">
              $59
              <span className="text-label font-semibold text-neutral-500">
                per month
              </span>
            </Heading>
            <p className="mt-6">
              For small households and busine sses with moderate energy
              consumption
            </p>
            <Button
              className="mt-8 w-full py-4"
              variant={recomended === false ? "tetriary-reversed" : "tetriary"}
            >
              Get Started
            </Button>
            <div>
              <Heading as="h3" className="my-4">
                Whats included
              </Heading>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
              </ul>
            </div>
          </div>
          <div
            className={cx(
              "relative col-span-2 overflow-hidden rounded-xl px-8 pb-8 pt-14 shadow-xl md:col-span-1",
              recomended === true
                ? "border-none bg-secondary-950 text-white"
                : "border-t-4 border-primary-300",
            )}
          >
            {recomended === true && (
              <p className="absolute right-0 top-0 w-full bg-primary-300 py-2 text-center text-black">
                Recommended
              </p>
            )}
            <span className="mb-4 text-sub-title">Basic</span>
            <Heading as="h2" className="flex items-center gap-4 text-features">
              $59
              <span className="text-label font-semibold text-neutral-500">
                per month
              </span>
            </Heading>
            <p className="mt-6">
              For small households and businesses with moderate energy
              consumption
            </p>
            <Button
              className="mt-8 w-full py-4"
              variant={recomended === true ? "tetriary-reversed" : "tetriary"}
            >
              Get Started
            </Button>
            <div>
              <Heading as="h3" className="my-4">
                Whats included
              </Heading>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
              </ul>
            </div>
          </div>
          <div
            className={cx(
              "relative col-span-2 overflow-hidden rounded-xl px-8 pb-8 pt-14 shadow-xl md:col-span-1",
              recomended === false
                ? "border-none bg-secondary-950 text-white"
                : "border-t-4 border-primary-300",
            )}
          >
            {recomended === false && (
              <p className="absolute right-0 top-0 w-full bg-primary-300 py-2 text-center text-black">
                Recommended
              </p>
            )}
            <span className="mb-4 text-sub-title">Basic</span>
            <Heading as="h2" className="flex items-center gap-4 text-features">
              $59
              <span className="text-label font-semibold text-neutral-500">
                per month
              </span>
            </Heading>
            <p className="mt-6">
              For small households and busine sses with moderate energy
              consumption
            </p>
            <Button
              className="mt-8 w-full py-4"
              variant={recomended === false ? "tetriary-reversed" : "tetriary"}
            >
              Get Started
            </Button>
            <div>
              <Heading as="h3" className="my-4">
                Whats included
              </Heading>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Fixed amount of renewable energy supply
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary-300 p-10 shadow-xl md:flex-row">
          <div>
            <Organic />
          </div>
          <div className="">
            <Heading as="h3" className="mb-2 text-label font-medium">
              Not sure which plan is right for you?
            </Heading>
            <p className="text-primary-950">
              We can help you choose the right plan based on your needs and
              budget. Just let us know your needs and we will get back to you
              with a quote. You can also call us at (123) 456-7890. We are here
              to help!
            </p>
          </div>
          <Button variant="primary" className="h-fit shrink-0">
            Book a free consultation
          </Button>
        </div>
      </Container>
    </SectionBlock>
  );
}
