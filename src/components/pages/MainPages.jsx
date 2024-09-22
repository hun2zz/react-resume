import React, { useState, useEffect } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import ScrollIndicator from "./ScrollIndicator";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import styles from "./MainPages.module.scss";
import MarqueeComponent from "./MarqueeComponent";
import FloatingCircle from "./Circle";

const MainPages = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // 현재 섹션을 감지하는 함수
    const handleSetActive = (to) => {
      const sectionIndex = [
        "intro",
        "introduce",
        "skill",
        "project",
        "screen5",
      ].indexOf(to);
      if (sectionIndex !== -1) {
        setCurrentSection(sectionIndex);
        console.log("현재 섹션 인덱스:", sectionIndex);
      }
    };

    // 스크롤 이벤트에 핸들러 등록
    Events.scrollEvent.register("begin", (to) => {
      handleSetActive(to);
    });

    // 스크롤 스파이 업데이트
    scrollSpy.update();

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <main className={currentSection === 1 ? "ligthSection" : ""}>
      <NavigationBar currentSection={currentSection} />

      <Element name="intro" className={styles.section}>
        <Intro />
        <MarqueeComponent />
      </Element>

      <Element name="introduce" className={styles.section}>
        <Introduce />
      </Element>

      <Element name="skill" className={styles.section}>
        <Skill />
      </Element>

      <Element name="project" className={styles.section}>
        <Project />
      </Element>

      <Element name="screen5" className={styles.section}>
        <h1>Screen 5</h1>
      </Element>
    </main>
  );
};

export default MainPages;
