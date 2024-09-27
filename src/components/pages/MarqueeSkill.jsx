import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "./MarqueeSkill.module.scss";
const MarqueeSkill = ({ text }) => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // 스크롤 위치에 따라 속도 계산
  //     const scrollPosition = window.scrollY;
  //     const maxScroll =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const scrollPercentage = scrollPosition / maxScroll;

  //     // 속도를 50에서 200 사이로 조절 (스크롤이 내려갈수록 빨라짐)
  //     const newSpeed = 50 + scrollPercentage * 100;
  //     setSpeed(newSpeed);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   console.log(speed);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className={styles.box}>
        {/* <h2 className={styles.title}>GITHUB</h2> */}
        <Marquee
          className={styles.wrap}
          gradient={false}
          speed={50}
          direction="right"
        >
          <div className={styles.textBox}>
            <span className={styles.text}>{text}</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeSkill;
