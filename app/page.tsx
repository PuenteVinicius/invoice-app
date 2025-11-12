"use client";

import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { InvoiceManagement } from "../features/invoce-management/InvoiceManagement";

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
