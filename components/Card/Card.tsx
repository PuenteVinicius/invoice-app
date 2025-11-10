import React from "react";
import { Size, Variant } from "../../types/styles";
import styles from "./Card.module.scss";

("use-client");

interface CardProps {
  title?: string;
  value?: string;
  children?: React.ReactElement;
  rightIcon?: any;
  variant?: Variant;
  size?: Size;
  className?: string;
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

export const Card = ({
  title,
  value,
  rightIcon,
  variant = "primary",
  size = "md",
  className = "",
}: CardProps) => {
  const getVariant = (variant: Variant): string => VARIANT_CLASS[variant];

  const getSize = (size: Size): string => SIZE_CLASS[size];

  return (
    <div
      className={`${className} ${styles.card} ${getVariant(variant)} ${getSize(
        size
      )}`}
    >
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.header}`}>
          <span className={`${styles.title}`}>{title}</span>
          <span>{rightIcon}</span>
        </div>
        <div className={`${styles.value}`}>{value}</div>
      </div>
    </div>
  );
};
