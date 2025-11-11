import { useState } from "react";

import Invoice, { Type } from "../types/invoice";

interface UseInvoiceReturn {
  invoices: Invoice[];
  totalExpense: number;
  totalIncome: number;
  totalAmmount: number;
  updateTotalAmmount: (totalIncome: number, totalExpense: number) => void;
  updateTotalExpenses: (invoices: Invoice[]) => void;
  updateTotalIncome: (invoices: Invoice[]) => void;
  addNewInvoice: (invoice: Invoice) => void;
  removeInvoice: (invoice: Invoice) => void;
}

const mockedInvoices: Invoice[] = [
  {
    id: "54448010-a78d-4676-b7ce-7301ff53965a",
    description: "Curso de NextJS",
    ammount: 899,
    category: "Educação",
    type: "EXPENSE",
    date: new Date().toString(),
  },
  {
    id: "88e14ae7-52aa-4c32-a4ac-036b78df5fcd",
    description: "Salário",
    ammount: 7350,
    category: "Salário",
    type: "INCOME",
    date: new Date().toString(),
  },
  {
    id: "7f36f026-2d60-45d9-9fc7-ea2d0ddefa61",
    description: "Curso de NextJS",
    ammount: 899,
    category: "Educação",
    type: "EXPENSE",
    date: new Date().toString(),
  },
  {
    id: "dd0b6734-033e-436a-843f-9a08b74cbdb2",
    description: "Curso de NextJS",
    ammount: 899,
    category: "Educação",
    type: "EXPENSE",
    date: new Date().toString(),
  },
];

export const useInvoice = (): UseInvoiceReturn => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockedInvoices);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalAmmount, setTotalAmmount] = useState<number>(0);

  const updateTotalExpenses = (invoices: Invoice[]) =>
    setTotalExpense(sumExpenses(invoices));

  const updateTotalIncome = (invoices: Invoice[]) =>
    setTotalIncome(sumIncome(invoices));

  const addNewInvoice = (invoice: Invoice) => {
    const newInvoices = invoices;
    newInvoices.push(invoice);
    setInvoices(newInvoices);
  };

  const updateTotalAmmount = (totalIncome: number, totalExpense: number) => {
    const totalAmmount: number = totalIncome - totalExpense;
    setTotalAmmount(totalAmmount);
  };

  const removeInvoice = (invoiceToRemove: Invoice) => {
    const newInvoices = invoices.filter(
      (invoice: Invoice) => invoiceToRemove.id !== invoice.id
    );
    setInvoices(newInvoices);
  };

  return {
    invoices,
    totalExpense,
    totalIncome,
    totalAmmount,
    updateTotalAmmount,
    updateTotalExpenses,
    updateTotalIncome,
    addNewInvoice,
    removeInvoice,
  };
};

const sumExpenses = (invoices: Invoice[]): number => {
  let totalExpense: number = 0;
  invoices.forEach((invoice: Invoice) =>
    invoice.type === Type.EXPENSE ? (totalExpense += invoice.ammount) : 0
  );
  return totalExpense;
};

const sumIncome = (invoices: Invoice[]): number => {
  let totalInvoice: number = 0;
  invoices.forEach((invoice: Invoice) =>
    invoice.type === Type.INCOME ? (totalInvoice += invoice.ammount) : 0
  );
  return totalInvoice;
};
