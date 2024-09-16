import React from "react";
import styles from "./ScrollIndicator.module.scss";

const ScrollIndicator = () => {
  return (
    <div className={styles.scrollIndicator}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default ScrollIndicator;
