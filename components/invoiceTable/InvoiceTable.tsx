import React from "react";
import { ItemBar } from "./ItemBar/ItemBar";
import styles from "./InvoiceTable.module.scss";

("use-client");

export const InvoiceTable = ({}) => {
  return (
    <div className={`${styles.table}`}>
      <ul className={`${styles.th}`}>
        <li className={`${styles.description}`}>
          <span>Descrição</span>
        </li>
        <li className={`${styles.value}`}>
          <span>Valor</span>
        </li>
        <li className={`${styles.category}`}>
          <span>Categoria</span>
        </li>
        <li className={`${styles.date}`}>
          <span>Data</span>
        </li>
      </ul>
      <ItemBar
        description="Curso de NextJS"
        value="R$ 899,OO"
        type="expense"
        category="education"
        date="12/02/2024"
        onDeleteItemClick={() => console.log("")}
      />
      <ItemBar
        description="Salário"
        value="R$ 7.350,OO"
        type="income"
        category="salary"
        date="12/02/2024"
        onDeleteItemClick={() => console.log("")}
      />
      <ItemBar
        description="Curso de NextJS"
        value="R$ 899,OO"
        type="expense"
        category="education"
        date="12/02/2024"
        onDeleteItemClick={() => console.log("")}
      />
      <ItemBar
        description="Curso de NextJS"
        value="R$ 899,OO"
        type="expense"
        category="education"
        date="12/02/2024"
        onDeleteItemClick={() => console.log("")}
      />
    </div>
  );
};
