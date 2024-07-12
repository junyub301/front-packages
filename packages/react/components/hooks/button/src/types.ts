import { ComponentProps, HTMLAttributes } from "react";

export type ButtonElementType = "button" | "a" | "div" | "span" | "input";

export type BaseButtonProps<T extends ButtonElementType = "button"> = {
  elementType?: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    type?: "button" | "submit" | "reset";
    tabIndex?: number;
    disabled?: boolean;
    "data-loading": boolean;
  };
};

export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">): UseButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"input">): UseButtonReturn<HTMLInputElement>;
  (props: BaseButtonProps<"span">): UseButtonReturn<HTMLSpanElement>;
};

export type useToggleButtonReturn<T> = UseButtonReturn<T> & {
  isSelected: boolean;
};

export type OverloadedToggleButtonFunction = {
  (
    props: BaseButtonProps<"button">,
    isSelected?: boolean,
  ): useToggleButtonReturn<HTMLButtonElement>;
  (
    props: BaseButtonProps<"a">,
    isSelected?: boolean,
  ): useToggleButtonReturn<HTMLAnchorElement>;
  (
    props: BaseButtonProps<"div">,
    isSelected?: boolean,
  ): useToggleButtonReturn<HTMLDivElement>;
  (
    props: BaseButtonProps<"input">,
    isSelected?: boolean,
  ): useToggleButtonReturn<HTMLInputElement>;
  (
    props: BaseButtonProps<"span">,
    isSelected?: boolean,
  ): useToggleButtonReturn<HTMLSpanElement>;
};
