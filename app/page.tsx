"use client";

import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { InvoiceManagement } from "../features/invoce-management/InvoiceManagement";
import { Modal } from "../components/Modal/Modal";
import Invoice from "../types/invoice";
import { useInvoice } from "../hooks/useInvoice";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Header onNewTransaction={() => setIsModalOpen(true)} />
      <InvoiceManagement
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
    </div>
  );
}
