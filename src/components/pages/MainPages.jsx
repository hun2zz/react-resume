import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import styles from "./MainPages.module.scss";
import MarqueeComponent from "./MarqueeComponent";

const MainPages = () => {
  const introduceRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: introduceRef,
    offset: ["start end", "end start"],
  });

  const yellowOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.5, 0.6], // 조정된 스크롤 진행 지점
    // [
    //   "rgba(0, 0, 0, 1)", // 시작 시 검은색
    //   "rgba(0, 0, 0, 1)", // 약간 늦춰진 시작점
    //   "rgba(238, 255, 4, 1)", // Introduce 섹션 내부 노란색
    //   "rgba(0, 0, 0, 1)", // 더 빨리 검은색으로 돌아감
    // ]
    [0, 1, 1, 0] // 투명도 설정 (노란색 레이어)
  );

  return (
    <motion.main>
      <NavigationBar />
      {/* 노란색 배경 레이어 */}
      <motion.div
        className="yellowBackground"
        style={{
          opacity: yellowOpacity, // 스크롤에 따른 투명도 설정
        }}
      />

      <div data-section="intro">
        <Element name="intro" className={styles.section}>
          <Intro />
          <MarqueeComponent />
        </Element>
      </div>

      <div ref={introduceRef} data-section="introduce">
        <Element name="introduce" className={styles.section}>
          <Introduce />
        </Element>
      </div>

      <div data-section="skill">
        <Element name="skill" className={styles.section}>
          <Skill />
        </Element>
      </div>

      <div data-section="project">
        <Element name="project" className={styles.section}>
          <Project />
        </Element>
      </div>

      <div data-section="screen5">
        <Element name="screen5" className={styles.section}>
          <h1>Screen 5</h1>
        </Element>
      </div>
    </motion.main>
  );
};

export default MainPages;
