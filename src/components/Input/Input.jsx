import React from "react";
import styles from "./styles.module.css";

function Input({ value, label, onChange, type }) {
  return (
    <>
      <input
        placeholder={label}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </>
  );
}

export default Input;