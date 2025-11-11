import React, { useEffect, useState } from "react";
import styles from "./InvoiceManagement.module.scss";
import { Card } from "../../components/Card/Card";
import Image from "next/image";
import featherArrowDownRight from "../../assets/feather-arrow-down-right.svg";
import featherArrowUpRight from "../../assets/feather-arrow-up-right.svg";
import { InvoiceTable } from "../../components/invoiceTable/InvoiceTable";
import Invoice from "../../types/invoice";
import { useInvoice } from "../../hooks/useInvoice";

("use-client");

export const InvoiceManagement = () => {
  const [invoices, setInvoices] = useState<Invoice[]>();
  const { getInvoices } = useInvoice();

  useEffect(() => {
    setInvoices(getInvoices());
  }, []);

  return (
    <main>
      <div className={`${styles.invoice}`}>
        <Card
          key={1}
          title="Entradas"
          value="R$ 1.529.289,52"
          rightIcon={<Image alt="Card Icon" src={featherArrowDownRight} />}
        />
        <Card
          key={2}
          title="Saídas"
          value="R$ 1.529.289,52"
          rightIcon={<Image alt="Card Icon" src={featherArrowUpRight} />}
          className={`${styles.card}`}
        />
        <Card
          key={3}
          title="Saldo total"
          value="R$ 50,00"
          variant="secondary"
        />
      </div>
      <div className={`${styles.invoice_table}`}>
        <InvoiceTable invoices={invoices} />
      </div>
    </main>
  );
};
