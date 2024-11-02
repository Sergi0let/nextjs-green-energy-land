import cx from "clsx";

type SubTitleProps = {
  className?: string;
  subTitle: string;
};

function SubTitle({ className, subTitle }: SubTitleProps) {
  return (
    <div className="mb-12 flex w-full items-center gap-2 border-b border-neutral-300 pb-4 text-white sm:mb-14">
      <span className="block size-2 rounded-full bg-primary-300" />
      <span className={cx("text-xl font-bold", className)}>{subTitle}</span>
    </div>
  );
}

export { SubTitle };
