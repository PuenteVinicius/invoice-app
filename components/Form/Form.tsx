import React, { FormEvent, useState } from "react";
import styles from "./Form.module.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Radio } from "../Radio/Radio";
import Image from "next/image";

import UpArrowIcon from "../../assets/feather-arrow-down-circle.svg";
import DownArrowIcon from "../../assets/feather-arrow-up-circle.svg";
import Invoice, { Type } from "../../types/invoice";

("use-client");

interface FormProps {
  onRegisterNewInvoice: (invoice: Invoice) => void;
}

export const Form = ({ onRegisterNewInvoice }: FormProps) => {
  const onSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataInvoiceObject: any = Object.fromEntries(formData.entries());
    let invoice: Invoice = {
      ...dataInvoiceObject,
    };
    invoice.id = crypto.randomUUID();
    invoice.date = new Date().toString();
    invoice.type = selectedValue;
    onRegisterNewInvoice(invoice);
  };

  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleChange = (event) => setSelectedValue(event.target.value);

  return (
    <form
      className={`${styles.form}`}
      onSubmit={(event: any) => onSubmit(event)}
    >
      <Input name="description" placeholder="descrição" id="description" />
      <Input name="ammount" placeholder="Preço" id="ammount" type="number" />
      <div className={`${styles.radioGroup}`}>
        <Radio
          className={`${styles.radioItem}`}
          selectedValue={selectedValue}
          label="Entrada"
          id="income"
          name="income"
          value={Type.INCOME}
          handleChange={handleChange}
          icon={<Image src={DownArrowIcon} alt="Down arrow icon logo" />}
        />
        <Radio
          selectedValue={selectedValue}
          label="Saída"
          id="expense"
          name="expense"
          value={Type.EXPENSE}
          handleChange={handleChange}
          icon={<Image src={UpArrowIcon} alt="Up arrow icon logo" />}
        />
      </div>
      <Input name="category" placeholder="Categoria" id="category" />
      <Button disabled={!selectedValue} type="submit">
        Cadastrar
      </Button>
    </form>
  );
};
