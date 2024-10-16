import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonStyle = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary:
        "hover:bg-primary-400 rounded-full px-6 py-4 bg-primary-300 duration-300 w-fit",
      tetriary: "",
      "tetriary-reversed":
        "border py-3 px-5 rounded-full text-white hover:bg-primary-300 hover:text-black",
    },
    size: {
      sm: "",
      md: "",
    },
  },
});

export type ButtonStyleProps = VariantProps<typeof buttonStyle>;
