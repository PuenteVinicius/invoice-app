import React, { ReactElement } from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
import cross from "../../assets/cross.svg";
import { Form } from "../Form/Form";
import { Roboto } from "next/font/google";
import Invoice from "../../types/invoice";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

("use-client");

interface ModalProps {
  isOpen: boolean;
  title?: string;
  onSubmit: (invoice: any) => void;
  onClose?: () => void;
}

export const Modal = ({ isOpen, title, onSubmit, onClose }: ModalProps) => {
  return isOpen ? (
    <div className={`${styles.modal}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.header}`}>
          <div className={`${styles.wrapper}`}>
            <span className={`${styles.title} ${roboto.className}`}>
              {title}
            </span>
          </div>
          <div className={`${styles.crossicon}`} onClick={() => onClose()}>
            <Image height={28} width={28} src={cross} alt="Cross Icon" />
          </div>
        </div>
        <div className={`${styles.body}`}>
          <Form
            onRegisterNewInvoice={(invoice: Invoice) => onSubmit(invoice)}
          />
        </div>
      </div>
    </div>
  ) : null;
};
