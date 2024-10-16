import cx from "clsx";
import { buttonStyle, ButtonStyleProps } from "./button-style";

export interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function Button(props: ButtonProps) {
  const { className, children, variant, size } = props;
  return (
    <button
      className={cx(buttonStyle({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
