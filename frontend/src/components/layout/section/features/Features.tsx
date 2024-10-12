import { Ev } from "@/components/elements";

const Features = () => {
  return (
    <section className="py-48 rounded-3xl bg-[#FFF7ED]">
      <div className="container">
        <div className="flex pb-4 items-center gap-2 border-b border-neutral-200 mb-12 sm:mb-14">
          <span className="h-2 w-2 block bg-primary-300 rounded-full" />
          <span>Solutions</span>
        </div>

        <div>
          <div className="sm:mb-24 mb-12">
            <h2 className="text-section leading-none">Key to clean future</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <li className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-sub-title font-medium leading-none mb-4">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="text-neutral-950 font-medium text-base mt-6 hover:underline">
                  Read more
                </button>
              </div>
            </li>
            <li className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-sub-title font-medium leading-none mb-4">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="text-neutral-950 font-medium text-base mt-6 hover:underline">
                  Read more
                </button>
              </div>
            </li>
            <li className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-sub-title font-medium leading-none mb-4">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="text-neutral-950 font-medium text-base mt-6 hover:underline">
                  Read more
                </button>
              </div>
            </li>
            <li className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-sub-title font-medium leading-none mb-4">
                  Ev charging
                </h3>
                <p className="to-neutral-900 text-base">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
                <button className="text-neutral-950 font-medium text-base mt-6 hover:underline">
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
