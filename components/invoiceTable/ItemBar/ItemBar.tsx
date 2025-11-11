import React from "react";

import styles from "./ItemBar.module.scss";
import Image from "next/image";
import trashIcon from "../../../assets/feather-trash.svg";
import { Roboto } from "next/font/google";
import Invoice, { Category, Type } from "../../../types/invoice";
import { formatToBRL } from "../../../lib/helpers";
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

("use-client");

interface ItemBarProps {
  invoice: Invoice;
  onDeleteItemClick: (invoice: Invoice) => void;
}

export const ItemBar = ({ invoice, onDeleteItemClick }: ItemBarProps) => {
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
        <span>{invoice.description}</span>
      </li>
      <li className={`${styles.value} ${roboto.className}`}>
        <span className={`${invoiceTypeClass[invoice.type]}`}>
          {formatToBRL(invoice.ammount)}
        </span>
      </li>
      <li className={`${styles.category}`}>
        <span>{categoryName[invoice.category]}</span>
      </li>
      <li className={`${styles.date}`}>
        <span>{invoice.date}</span>
      </li>
      <li
        className={`${styles.trash}`}
        onClick={() => onDeleteItemClick(invoice)}
      >
        <Image src={trashIcon} alt="trash icon" />
      </li>
    </ul>
  );
};
