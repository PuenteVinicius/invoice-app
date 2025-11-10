import React from "react";
import styles from "./Header.module.scss";
import { Button } from "../Button/Button";
import Image from "next/image";
import tictoLogo from "../../assets/ticto-logo.svg";

("use-client");

export const Header = () => (
  <header className={`${styles.header}`}>
    <div className={`${styles.header__wrapper}`}>
      <div className={`${styles.header__logo}`}>
        <Image src={tictoLogo} alt="Ticto logo" />
      </div>
      <div className={`${styles.header__button}`}>
        <Button>
          <span>Nova transação</span>
        </Button>
      </div>
    </div>
  </header>
);
