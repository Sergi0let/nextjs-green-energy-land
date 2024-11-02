import cx from "clsx";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading({ as, className, children }: HeadingProps) {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(as, props, children);
  return <Heading className={cx(className)}>{children}</Heading>;
}

export { Heading };
