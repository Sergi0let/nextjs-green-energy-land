import { Ev } from "@/components/elements";

const Features = () => {
  return (
    <section className="rounded-3xl bg-beigie-primary py-48">
      <div className="container">
        <div className="mb-12 flex items-center gap-2 border-b border-neutral-200 pb-4 sm:mb-14">
          <span className="block h-2 w-2 rounded-full bg-primary-300" />
          <span>Solutions</span>
        </div>

        <div>
          <div className="mb-12 sm:mb-24">
            <h2 className="text-section leading-none">Key to clean future</h2>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <li className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <h3 className="mb-4 text-sub-title font-medium leading-none">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="mt-6 text-base font-medium text-neutral-950 hover:underline">
                  Read more
                </button>
              </div>
            </li>
            <li className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <h3 className="mb-4 text-sub-title font-medium leading-none">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="mt-6 text-base font-medium text-neutral-950 hover:underline">
                  Read more
                </button>
              </div>
            </li>
            <li className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <h3 className="mb-4 text-sub-title font-medium leading-none">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="mt-6 text-base font-medium text-neutral-950 hover:underline">
                  Read more
                </button>
              </div>
            </li>
            <li className="flex flex-col items-start gap-6">
              <Ev />
              <div>
                <h3 className="mb-4 text-sub-title font-medium leading-none">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="mt-6 text-base font-medium text-neutral-950 hover:underline">
                  Read more
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Features };
