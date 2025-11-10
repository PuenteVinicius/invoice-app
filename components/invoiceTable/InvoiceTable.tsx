import React from "react";
import { ItemBar } from "./ItemBar/ItemBar";
import styles from "./InvoiceTable.module.scss";

("use-client");

export const InvoiceTable = ({}) => {
  return (
    <div className={`${styles.table}`}>
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
