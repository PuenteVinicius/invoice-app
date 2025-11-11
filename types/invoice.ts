export const Category = {
  EDUCATION: "EDUCATION",
  SALARY: "SALARY",
};

export const Type = {
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
};

export type CategoryType = "EDUCATION" | "SALARY";

export type InvoiceType = "INCOME" | "EXPENSE";

export default interface Invoice {
  description: string;
  ammount: number;
  category: CategoryType;
  type: InvoiceType;
  date: string;
}
