import React from "react";
import styles from "./NotFound.module.scss"

const NotFound: React.FC = () => {
  return (
    <div className={styles.content}>
      <h2>
        Ничего не найдено <span>😕</span>
      </h2>
      <p>Такой страницы не существует</p>
    </div>
  );
};

export default NotFound;
