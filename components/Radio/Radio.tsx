import React from "react";
import { Size } from "../../types/styles";
import styles from "./Radio.module.scss";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

("use-client");

interface RadioProps {
  label: string;
  value?: string;
  id: string;
  size?: Size;
  className?: string;
  name: string;
  selectedValue: any;
  handleChange: any;
  icon: any;
}

export const Radio = ({
  value,
  id,
  className = "",
  selectedValue,
  name,
  label,
  handleChange,
  icon,
}: RadioProps) => {
  return (
    <label
      className={`${styles.radio} ${className} ${roboto.className} ${
        selectedValue === name ? styles.checked : null
      }`}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === name}
        onChange={handleChange}
      />
      <span className={`${styles.icon}`}>{icon}</span>
      <span className={`${styles.label}`}>{label}</span>
    </label>
  );
};
