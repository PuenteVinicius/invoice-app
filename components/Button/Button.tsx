import React from "react";
import { Size, Variant } from "../../types/styles";
import styles from "./Button.module.scss";

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
      {children}
    </button>
  );
};
