import React from "react";
import { Size } from "../../types/styles";
import styles from "./Input.module.scss";

("use-client");

interface InputProps {
  placeholder: string;
  value: string;
  id: string;
  size?: Size;
  className?: string;
  name: string;
}

export const Input = ({
  placeholder,
  value,
  id,
  className,
  size = "md",
  name,
}: InputProps) => {
  return (
    <input
      type="text"
      name={name}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      id={id}
    />
  );
};
