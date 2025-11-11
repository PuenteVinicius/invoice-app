import React, { FormEvent, useState } from "react";
import styles from "./Form.module.scss";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Radio } from "../Radio/Radio";
import Image from "next/image";

import UpArrowIcon from "../../assets/feather-arrow-down-circle.svg";
import DownArrowIcon from "../../assets/feather-arrow-up-circle.svg";

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
      <div className={`${styles.radioGroup}`}>
        <Radio
          className={`${styles.radioItem}`}
          selectedValue={selectedValue}
          label="Entrada"
          id="income"
          name="income"
          value="income"
          handleChange={handleChange}
          icon={<Image src={DownArrowIcon} alt="Down arrow icon logo" />}
        />
        <Radio
          selectedValue={selectedValue}
          label="Saída"
          id="expense"
          name="ebxpense"
          value="expense"
          handleChange={handleChange}
          icon={<Image src={UpArrowIcon} alt="Up arrow icon logo" />}
        />
      </div>
      <Input name="category" placeholder="Categoria" id="category" />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};
