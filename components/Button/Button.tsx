import React from "react";
import { Size, SizeType, Variant, VariantType } from "../../types/styles";
import styles from "./Button.module.scss";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

("use-client");

interface ButtonProps {
  variant?: VariantType;
  size?: SizeType;
  onButtonClick?: () => void;
  type?: any;
  children: any;
}

const VARIANT_CLASS = {
  [Variant.PRIMARY]: styles.primary,
  [Variant.SECONDARY]: styles.secondary,
  [Variant.WARNING]: styles.warning,
};

const SIZE_CLASS = {
  [Size.SM]: styles.sm,
  [Size.MD]: styles.md,
  [Size.LG]: styles.lg,
};

export const Button = ({
  variant = "primary",
  size = "md",
  onButtonClick,
  children,
  type,
}: ButtonProps) => {
  const getVariant = (variant: VariantType): string => VARIANT_CLASS[variant];

  const getSize = (size: SizeType): string => SIZE_CLASS[size];

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
