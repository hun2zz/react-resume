import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./MarqueeCh.module.scss";

const MarqueeCh = ({ direction = "left", texts = [], rotateAngle = -3, emphasisIndices = [], secondaryEmphasisIndices = [] }) => {
  return (
    <div className={styles.box}>
      <Marquee
        className={styles.wrap}
        gradient={false}
        speed={120}
        direction={direction}
        style={{ transform: `translateY(10px) rotate(${rotateAngle}deg)` }}
      >
        <div className={styles.textBox}>
          {texts.map((text, index) => (
            <span 
              key={index} 
              className={`
                ${styles.text} 
                ${emphasisIndices.includes(index) ? styles.primaryEmphasis : ''}
                ${secondaryEmphasisIndices.includes(index) ? styles.secondaryEmphasis : ''}
              `}
            >
              {text}{" "}
            </span>
          ))}
          <div className={styles.separator}></div>
        </div>
        <div className={styles.textBox}>
          {texts.map((text, index) => (
            <span 
              key={index} 
              className={`
                ${styles.text} 
                ${emphasisIndices.includes(index) ? styles.primaryEmphasis : ''}
                ${secondaryEmphasisIndices.includes(index) ? styles.secondaryEmphasis : ''}
              `}
            >
              {text}{" "}
            </span>
          ))}
          <div className={styles.separator}></div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCh;
