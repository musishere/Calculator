import React from "react";
import styles from "./Button.module.css";

const ButtonContainer = ({onButtonClick}) => {
  const ButtonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.ButtonContainer}>
      {ButtonNames.map((ButtonName) => (
        <button className={styles.Button} onClick={()=>onButtonClick(ButtonName)}>{ButtonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
