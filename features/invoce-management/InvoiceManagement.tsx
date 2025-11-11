import React, { useEffect, useState } from "react";
import styles from "./InvoiceManagement.module.scss";
import { Card } from "../../components/Card/Card";
import Image from "next/image";
import featherArrowDownRight from "../../assets/feather-arrow-down-right.svg";
import featherArrowUpRight from "../../assets/feather-arrow-up-right.svg";
import { InvoiceTable } from "../../components/invoiceTable/InvoiceTable";
import { useInvoice } from "../../hooks/useInvoice";
import Invoice from "../../types/invoice";

("use-client");

export const InvoiceManagement = () => {
  const {
    invoices,
    totalExpense,
    totalIncome,
    totalAmmount,
    updateTotalExpenses,
    updateTotalIncome,
    updateTotalAmmount,
    removeInvoice,
  } = useInvoice();

  useEffect(() => {
    updateTotalExpenses(invoices);
    updateTotalIncome(invoices);
  }, []);

  useEffect(() => {
    updateTotalExpenses(invoices);
    updateTotalIncome(invoices);
  }, [removeInvoice]);

  useEffect(() => {
    updateTotalAmmount(totalIncome, totalExpense);
  }, [totalIncome, totalExpense]);

  return (
    <main>
      <div className={`${styles.invoice}`}>
        <Card
          key={1}
          title="Entradas"
          value={totalIncome}
          rightIcon={<Image alt="Card Icon" src={featherArrowDownRight} />}
        />
        <Card
          key={2}
          title="Saídas"
          value={totalExpense}
          rightIcon={<Image alt="Card Icon" src={featherArrowUpRight} />}
          className={`${styles.card}`}
        />
        <Card
          key={3}
          title="Saldo total"
          value={totalAmmount}
          variant={`${totalAmmount <= 0 ? "warning" : "secondary"}`}
        />
      </div>
      <div className={`${styles.invoice_table}`}>
        <InvoiceTable
          invoices={invoices}
          onExcludeInvoice={(invoice: Invoice) => removeInvoice(invoice)}
        />
      </div>
    </main>
  );
};
