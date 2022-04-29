import React from "react";
import styles from "./styles.module.css";

function InputGET(props, {onChange}) {
  return (
    <>
      <input
        value={props.label}
        type={props.type}
        onChange={onChange}
        className={styles.input}
        readOnly
      />
    </>
  );
}

export default InputGET;