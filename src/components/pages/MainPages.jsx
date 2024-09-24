import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Element } from "react-scroll";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import styles from "./MainPages.module.scss";
import MarqueeComponent from "./MarqueeComponent";

const MainPages = () => {
  const containerRef = useRef(null);
  const scrollY = useMotionValue(0);

  const backgroundColor = useTransform(
    scrollY,
    [
      0,
      window.innerHeight * 0.8, // Start transition earlier
      window.innerHeight * 1.2, // Complete transition later
      window.innerHeight * 1.75, // Start reverting earlier
      window.innerHeight * 2, // Complete reversion later
    ],
    ["#222", "#222", "#eeff04", "#eeff04", "#222"]
  );

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.4, // 0.6으로 감소, 스크롤 속도를 더 느리게 함
      lerp: 0.08, // 0.08로 설정, 부드러운 전환 유지
      smartphone: {
        smooth: true,
        multiplier: 0.6,
      },
      tablet: {
        smooth: true,
        multiplier: 0.6,
      },
    });

    scroll.on("scroll", (instance) => {
      scrollY.set(instance.scroll.y);
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [scrollY]);

  return (
    <motion.main ref={containerRef} style={{ backgroundColor }}>
      <NavigationBar />
      <div data-section="intro">
        <Element name="intro" className={styles.section}>
          <Intro />
          <MarqueeComponent />
        </Element>
      </div>
      <div data-section="introduce">
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
