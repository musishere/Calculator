import React from "react";
import styles from "./Display.module.css";

const Display = ({ displayvalue }) => {
  return <input
   className={styles.Display}
   value={displayvalue} 
   readOnly>
   </input>;
};

export default Display;
