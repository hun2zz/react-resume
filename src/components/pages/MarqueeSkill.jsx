import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./MarqueeSkill.module.scss";

const MarqueeSkill = ({ text, direction, speed }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const distance = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: direction === "left" ? -distance : distance,
      ease: "none",
      duration: speed,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % distance)
      }
    });
  }, [direction, speed]);

  return (
    <div className={styles.box}>
      <div className={styles.wrap} ref={marqueeRef}>
        {text.concat(text).map((tech, index) => (
          <div key={index} className={styles.textBox}>
            <span className={styles.text}>{tech}</span>
            <div className={styles.circle}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSkill;
