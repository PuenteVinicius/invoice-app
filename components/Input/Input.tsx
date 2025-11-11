import React from "react";
import { SizeType } from "../../types/styles";
import styles from "./Input.module.scss";

("use-client");

interface InputProps {
  placeholder: string;
  value?: string;
  id: string;
  size?: SizeType;
  className?: string;
  name: string;
  type?: string;
}

export const Input = ({
  placeholder,
  value,
  id,
  className,
  name,
  type = "text",
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      id={id}
    />
  );
};
