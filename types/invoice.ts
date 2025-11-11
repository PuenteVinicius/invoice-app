export const Type = {
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
};


export type InvoiceType = "INCOME" | "EXPENSE";

export default interface Invoice {
  id: string;
  description: string;
  ammount: number;
  category: string;
  type: any;
  date: string;
}