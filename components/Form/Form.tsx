import React, { FormEvent, useState } from "react";
import styles from "./Form.module.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

("use-client");

interface FormProps {}

export const Form = () => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form
      className={`${styles.form}`}
      onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}
    >
      <Input name="name" placeholder="Nome" id="name" />
      <Input name="price" placeholder="Preço" id="price" />
      <div>
        <label>
          <input
            type="radio"
            name="invoiceOption"
            value="income"
            checked={selectedValue === "income"}
            onChange={handleChange}
          />
          Entrada
        </label>
        <label>
          <input
            type="radio"
            name="invoiceOption"
            value="expense"
            checked={selectedValue === "expense"}
            onChange={handleChange}
          />
          Saída
        </label>
      </div>
      <Input name="category" placeholder="Categoria" id="category" />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};
