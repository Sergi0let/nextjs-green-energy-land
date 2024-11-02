import { Button, Heading, SectionBlock } from "@/components";

function NewLetter() {
  return (
    <SectionBlock className="rounded-3xl bg-primary-300 py-16 sm:px-24">
      <div className="container">
        <div className="grid gap-3 sm:grid-cols-2">
          <Heading as="h2" className="text-title leading-none">
            Your Source for Green Energy Updates
          </Heading>
          <div className="mt-4 flex flex-col justify-center sm:mt-0 sm:flex-row sm:items-center sm:gap-3">
            <input
              type="text"
              placeholder="Enter your email address"
              className="mb-3 rounded-full px-6 py-3 sm:mb-0 sm:w-[330px]"
            />
            <Button variant="primary">Get in touch</Button>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
export { NewLetter };
