"use client";

import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { InvoiceManagement } from "../features/invoce-management/InvoiceManagement";
import { Modal } from "../components/Modal/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Header onNewTransaction={() => setIsModalOpen(true)} />
      <InvoiceManagement />
      <Modal
        isOpen={isModalOpen}
        title="Cadastrar Transação"
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
