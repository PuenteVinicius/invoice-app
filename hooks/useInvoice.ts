import { useState } from "react";

import Invoice from "../types/invoice";

interface UseInvoiceReturn {
  getInvoices: () => Invoice[];
}

const mockedInvoices: Invoice[] = [
  {
    description: "Curso de NextJS",
    ammount: 8999,
    category: "EDUCATION",
    type: "EXPENSE",
    date: "12/02/2022:13:24",
  },
  {
    description: "Salário",
    ammount: 7350,
    category: "SALARY",
    type: "INCOME",
    date: "12/02/2022:13:24",
  },
  {
    description: "Curso de NextJS",
    ammount: 899,
    category: "EDUCATION",
    type: "EXPENSE",
    date: "12/02/2022:13:24",
  },
  {
    description: "Curso de NextJS",
    ammount: 899,
    category: "EDUCATION",
    type: "EXPENSE",
    date: "12/02/2022:13:24",
  },
];

export const useInvoice = (): UseInvoiceReturn => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockedInvoices);

  const getInvoices = () => invoices;

  return {
    getInvoices,
  };
};
