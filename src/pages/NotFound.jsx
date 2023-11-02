import React from "react";
import styles from "./NotFound.module.scss"

const NotFound = () => {
  return (
    <div className={styles.content}>
      <h2>
        Ничего не найдено <icon>😕</icon>
      </h2>
      <p>Такой страницы не существует</p>
    </div>
  );
};

export default NotFound;
