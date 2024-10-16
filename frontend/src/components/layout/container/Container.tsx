import cx from "clsx";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

function Container({ className, children }: ContainerProps) {
  return <section className={cx("container", className)}>{children}</section>;
}

export { Container };
