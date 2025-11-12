// useInvoice.test.ts
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useInvoice } from "./useInvoice";
import Invoice, { Type } from "../types/invoice";

// Mock dos dados de invoice para testes
const mockInvoice: Invoice = {
  id: "test-id-123",
  description: "Test Invoice",
  ammount: 100,
  category: "Test Category",
  type: Type.EXPENSE,
  date: new Date().toString(),
};

const mockIncomeInvoice: Invoice = {
  id: "test-id-456",
  description: "Test Income",
  ammount: 500,
  category: "Salary",
  type: Type.INCOME,
  date: new Date().toString(),
};

describe("useInvoice", () => {
  beforeEach(() => {
    // Reset do hook antes de cada teste
    const { result } = renderHook(() => useInvoice());
    // Limpa as invoices mantendo a estrutura do hook original
    act(() => {
      result.current.invoices.forEach((invoice) => {
        result.current.removeInvoice(invoice);
      });
    });
  });

  it("should initialize with mocked invoices", () => {
    const { result } = renderHook(() => useInvoice());

    expect(result.current.invoices).toHaveLength(4);
    expect(result.current.totalExpense).toBe(0);
    expect(result.current.totalIncome).toBe(0);
    expect(result.current.totalAmmount).toBe(0);
  });

  it("should add a new invoice", () => {
    const { result } = renderHook(() => useInvoice());

    const initialLength = result.current.invoices.length;

    act(() => {
      result.current.addNewInvoice(mockInvoice);
    });

    expect(result.current.invoices).toHaveLength(initialLength + 1);
    expect(result.current.invoices[initialLength]).toEqual(mockInvoice);
  });

  it("should remove an invoice", () => {
    const { result } = renderHook(() => useInvoice());

    const initialLength = result.current.invoices.length;
    const invoices = result.current.invoices;
    const firstInvoice = invoices[0];

    act(() => {
      result.current.removeInvoice(firstInvoice);
    });

    expect(result.current.invoices).toHaveLength(initialLength - 1);
    expect(
      result.current.invoices.find((inv) => inv.id === firstInvoice.id)
    ).toBeUndefined();
  });

  it("should calculate total expenses correctly", () => {
    const { result } = renderHook(() => useInvoice());

    act(() => {
      result.current.updateTotalExpenses(result.current.invoices);
    });

    expect(result.current.totalExpense).toBe(2797);
  });

  it("should calculate total income correctly", () => {
    const { result } = renderHook(() => useInvoice());

    act(() => {
      result.current.updateTotalIncome(result.current.invoices);
    });

    expect(result.current.totalIncome).toBe(7350);
  });

  it("should update total amount correctly", () => {
    const { result } = renderHook(() => useInvoice());

    act(() => {
      result.current.updateTotalAmmount(2000, 500);
    });

    expect(result.current.totalAmmount).toBe(1500);
  });

  it("should not remove invoice when id does not match", () => {
    const { result } = renderHook(() => useInvoice());

    const initialLength = result.current.invoices.length;

    const nonExistentInvoice: Invoice = {
      ...mockInvoice,
      id: "non-existent-id",
    };

    act(() => {
      result.current.removeInvoice(nonExistentInvoice);
    });

    expect(result.current.invoices).toHaveLength(initialLength);
  });

  describe("helper functions", () => {
    it("sumExpenses should calculate only expense invoices", () => {
      const mixedInvoices: Invoice[] = [
        { ...mockInvoice, id: "1", ammount: 100, type: Type.EXPENSE },
        { ...mockInvoice, id: "2", ammount: 200, type: Type.INCOME },
        { ...mockInvoice, id: "3", ammount: 150, type: Type.EXPENSE },
      ];

      // Como as funções helper não são exportadas, testamos através do hook
      const { result } = renderHook(() => useInvoice());

      act(() => {
        mixedInvoices.forEach((invoice) =>
          result.current.addNewInvoice(invoice)
        );
        result.current.updateTotalExpenses(result.current.invoices);
      });

      expect(result.current.totalExpense).toBe(3047);
    });

    it("sumIncome should calculate only income invoices", () => {
      const mixedInvoices: Invoice[] = [
        { ...mockInvoice, id: "1", ammount: 100, type: Type.EXPENSE },
        { ...mockInvoice, id: "2", ammount: 200, type: Type.INCOME },
        { ...mockInvoice, id: "3", ammount: 300, type: Type.INCOME },
      ];

      const { result } = renderHook(() => useInvoice());

      act(() => {
        mixedInvoices.forEach((invoice) =>
          result.current.addNewInvoice(invoice)
        );
        result.current.updateTotalIncome(result.current.invoices);
      });

      expect(result.current.totalIncome).toBe(8050);
    });
  });
});
