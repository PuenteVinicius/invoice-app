import React from "react";
import { ItemBar } from "./ItemBar/ItemBar";
import styles from "./InvoiceTable.module.scss";
import { Roboto } from "next/font/google";
import Invoice from "../../types/invoice";
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

("use-client");

interface InvoiceTableProps {
  invoices: Invoice[];
}

export const InvoiceTable = ({ invoices }: InvoiceTableProps) => {
  return (
    <div className={`${styles.table} ${roboto.className}`}>
      <ul className={`${styles.th}`}>
        <li className={`${styles.description}`}>
          <span>Descrição</span>
        </li>
        <li className={`${styles.value}`}>
          <span>Valor</span>
        </li>
        <li className={`${styles.category}`}>
          <span>Categoria</span>
        </li>
        <li className={`${styles.date}`}>
          <span>Data</span>
        </li>
      </ul>
      {invoices &&
        invoices.map((invoice: Invoice) => (
          <ItemBar
            description={invoice.description}
            ammount={invoice.ammount}
            type={invoice.type}
            category={invoice.category}
            date={invoice.date}
            onDeleteItemClick={() => console.log("")}
          />
        ))}
    </div>
  );
};
