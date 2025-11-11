import React from "react";
import { ItemBar } from "./ItemBar/ItemBar";
import styles from "./InvoiceTable.module.scss";
import { Roboto } from "next/font/google";
import Invoice from "../../types/invoice";
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

("use-client");

interface InvoiceTableProps {
  invoices: Invoice[];
  onExcludeInvoice: (invoiceToExclude: Invoice) => void;
}

export const InvoiceTable = ({
  invoices,
  onExcludeInvoice,
}: InvoiceTableProps) => {
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
            key={invoice.id}
            invoice={invoice}
            onDeleteItemClick={(invoice: Invoice) => onExcludeInvoice(invoice)}
          />
        ))}
    </div>
  );
};
