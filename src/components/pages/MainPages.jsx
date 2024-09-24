import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
  const scrollInstanceRef = useRef(null); // LocomotiveScroll 인스턴스를 저장할 ref
  const scrollY = useMotionValue(0);
  const [isYellowBackground, setIsYellowBackground] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const backgroundColor = useTransform(
    scrollY,
    [
      0,
      window.innerHeight * 0.8,
      window.innerHeight * 1.2,
      window.innerHeight * 1.75,
      window.innerHeight * 2,
    ],
    ["#222", "#222", "#eeff04", "#eeff04", "#222"]
  );

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.4,
      lerp: 0.08,
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

      const startTransition = window.innerHeight * 0.8;
      const endTransition = window.innerHeight * 1.75;

      if (
        instance.scroll.y >= startTransition &&
        instance.scroll.y <= endTransition
      ) {
        setIsYellowBackground(true);
      } else {
        setIsYellowBackground(false);
      }

      // 현재 스크롤 위치에 따라 섹션 업데이트
      const sections = [
        { id: "intro", offset: 0 },
        { id: "introduce", offset: window.innerHeight },
        { id: "skill", offset: window.innerHeight * 2 },
        { id: "project", offset: window.innerHeight * 3 },
        { id: "screen5", offset: window.innerHeight * 4 },
      ];

      sections.forEach((section) => {
        if (
          instance.scroll.y >= section.offset &&
          instance.scroll.y < section.offset + window.innerHeight
        ) {
          setCurrentSection(section.id);
        }
      });
    });

    scrollInstanceRef.current = scroll; // scroll 인스턴스를 ref에 저장

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [scrollY]);

  return (
    <>
      <NavigationBar
        isYellowBackground={isYellowBackground}
        currentSection={currentSection}
        scrollInstance={scrollInstanceRef.current} // scroll 인스턴스를 전달
      />
      <motion.main ref={containerRef} style={{ backgroundColor }}>
        <div id="intro" className={styles.section}>
          <Intro />
          <MarqueeComponent />
        </div>
        <div id="introduce" className={styles.section}>
          <Introduce />
        </div>
        <div id="skill" className={styles.section}>
          <Skill />
        </div>
        <div id="project" className={styles.section}>
          <Project />
        </div>
        <div id="screen5" className={styles.section}>
          <h1>Screen 5</h1>
        </div>
      </motion.main>
    </>
  );
};

export default MainPages;