import { Button, Heading } from "@/components";

function NewLetter() {
  return (
    <div className="rounded-3xl bg-primary-300 py-12 sm:px-8">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2">
          <Heading as="h2" animate className="text-title leading-none">
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
    </div>
  );
}
export { NewLetter };
