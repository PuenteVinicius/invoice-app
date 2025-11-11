import React from "react";

import styles from "./ItemBar.module.scss";
import Image from "next/image";
import trashIcon from "../../../assets/feather-trash.svg";
import { Roboto } from "next/font/google";
import Invoice, { Category, Type } from "../../../types/invoice";
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

("use-client");

interface ItemBarProps {
  onDeleteItemClick: () => void;
}

export const ItemBar = ({
  description,
  type,
  ammount,
  category,
  date,
  onDeleteItemClick = () => console.log("click"),
}: ItemBarProps & Invoice) => {
  const invoiceTypeClass = {
    [Type.EXPENSE]: styles.expense,
    [Type.INCOME]: styles.income,
  };

  const categoryName = {
    [Category.EDUCATION]: "Educação",
    [Category.SALARY]: "Receita Fixa",
  };

  return (
    <ul className={`${styles.item}`}>
      <li className={`${styles.description}`}>
        <span>{description}</span>
      </li>
      <li className={`${styles.value} ${roboto.className}`}>
        <span className={`${invoiceTypeClass[type]}`}>{ammount}</span>
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
