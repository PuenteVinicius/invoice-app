import React from "react";
import { Size, Variant } from "../../types/styles";
import styles from "./Button.module.scss";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

("use-client");

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: any;
  onButtonClick?: () => void;
  type?: any;
}

const VARIANT_CLASS = {
  primary: styles.primary,
  secondary: styles.secondary,
  warning: styles.warning,
};

const SIZE_CLASS = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export const Button = ({
  variant = "primary",
  size = "md",
  onButtonClick,
  children,
  type,
}: ButtonProps) => {
  const getVariant = (variant: Variant): string => VARIANT_CLASS[variant];

  const getSize = (size: Size): string => SIZE_CLASS[size];

  return (
    <button
      type={type}
      className={`${styles.button} ${getVariant(variant)} ${getSize(size)}`}
      onClick={() => onButtonClick()}
    >
      <p className={`${styles.text} ${roboto.className}`}>{children}</p>
    </button>
  );
};
