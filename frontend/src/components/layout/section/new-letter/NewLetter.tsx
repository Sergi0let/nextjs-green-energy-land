function NewLetter() {
  return (
    <section className="rounded-3xl bg-primary-300 py-16 sm:px-24">
      <div className="container">
        <div className="grid gap-3 sm:grid-cols-2">
          <h2 className="text-title leading-none">
            Your Source for Green Energy Updates
          </h2>
          <div className="flex flex-col justify-center sm:flex-row sm:items-center sm:gap-3">
            <input
              type="text"
              placeholder="Enter your email address"
              className="mb-3 rounded-full px-6 py-3 sm:mb-0 sm:w-[330px]"
            />
            <button className="rounded-full bg-secondary-950 px-6 py-3 text-white duration-300 hover:bg-secondary-800">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export { NewLetter };
