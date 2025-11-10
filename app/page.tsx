"use client";

import React from "react";
import { Header } from "../components/Header/Header";
import { InvoiceManagement } from "../features/invoce-management/InvoiceManagement";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <InvoiceManagement />
      </main>
    </div>
  );
}
