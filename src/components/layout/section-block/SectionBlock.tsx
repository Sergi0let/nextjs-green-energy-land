import cx from "clsx";

type SectionBlockProps = {
  className?: string;
  children: React.ReactNode;
};
function SectionBlock({ children, className }: SectionBlockProps) {
  return (
    <div className={cx("overflow-hidden py-28 sm:py-48", className)}>
      {children}
    </div>
  );
}

export { SectionBlock };
