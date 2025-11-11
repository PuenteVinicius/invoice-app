import React from "react";
import { InvoiceCategory, InvoiceType } from "../../../types/invoice";
import styles from "./ItemBar.module.scss";
import Image from "next/image";
import trashIcon from "../../../assets/feather-trash.svg";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

("use-client");

interface ItemBarProps {
  description: string;
  value: string;
  category: InvoiceCategory;
  date: string;
  type: InvoiceType;
  onDeleteItemClick: () => void;
}

export const ItemBar = ({
  description,
  value,
  category,
  date,
  type,
  onDeleteItemClick = () => console.log("click"),
}: ItemBarProps) => {
  const invoiceTypeClass = {
    expense: styles.expense,
    income: styles.income,
  };

  const categoryName = {
    education: "Educação",
    salary: "Receita Fixa",
  };

  return (
    <ul className={`${styles.item}`}>
      <li className={`${styles.description}`}>
        <span>{description}</span>
      </li>
      <li className={`${styles.value} ${roboto.className}`}>
        <span className={`${invoiceTypeClass[type]}`}>{value}</span>
      </li>
      <li className={`${styles.category}`}>
        <span>{categoryName[category]}</span>
      </li>
      <li className={`${styles.date}`}>
        <span>{date}</span>
      </li>
      <li className={`${styles.trash}`} onClick={() => onDeleteItemClick()}>
        <Image src={trashIcon} alt="trash icon" />
      </li>
    </ul>
  );
};
