import React from "react";
import styles from "./Card.module.scss";

import { Size, SizeType, Variant, VariantType } from "../../types/styles";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({ weight: "200", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "500", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

("use-client");

interface CardProps {
  title?: string;
  value?: string;
  children?: React.ReactElement;
  rightIcon?: any;
  variant?: VariantType;
  size?: SizeType;
  className?: string;
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

export const Card = ({
  title,
  value,
  rightIcon,
  variant = "primary",
  size = "md",
  className,
}: CardProps) => {
  const getVariant = (variant: VariantType): string => VARIANT_CLASS[variant];

  const getSize = (size: SizeType): string => SIZE_CLASS[size];

  return (
    <div
      className={`${className} ${styles.card} ${poppins.className} ${getVariant(
        variant
      )} ${getSize(size)}`}
    >
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.header}`}>
          <span className={`${styles.title} ${roboto.className}`}>{title}</span>
          <span>{rightIcon}</span>
        </div>
        <div className={`${styles.value} ${poppinsBold.className}`}>
          {value}
        </div>
      </div>
    </div>
  );
};
