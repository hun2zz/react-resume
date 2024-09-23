import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import styles from "./MainPages.module.scss";
import MarqueeComponent from "./MarqueeComponent";

const MainPages = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // 각 섹션의 ref 생성
  const introRef = useRef(null);
  const introduceRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const screen5Ref = useRef(null);

  useEffect(() => {
    // IntersectionObserver를 사용하여 섹션 진입 감지
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            const sectionIndex = [
              "intro",
              "introduce",
              "skill",
              "project",
              "screen5",
            ].indexOf(sectionName);
            setCurrentSection(sectionIndex);
            console.log("현재 섹션 인덱스:", sectionIndex);
          }
        });
      },
      {
        root: null, // viewport를 root로 설정
        threshold: 0.7, // 50% 이상 보이면 감지
      }
    );

    // 각 섹션의 ref를 observer에 등록
    const sectionRefs = [
      introRef,
      introduceRef,
      skillRef,
      projectRef,
      screen5Ref,
    ];
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // 컴포넌트 언마운트 시 observer 해제
    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <main className={currentSection === 1 ? "ligthSection" : ""}>
      <NavigationBar currentSection={currentSection} />

      <div ref={introRef} data-section="intro">
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

      <div ref={skillRef} data-section="skill">
        <Element name="skill" className={styles.section}>
          <Skill />
        </Element>
      </div>

      <div ref={projectRef} data-section="project">
        <Element name="project" className={styles.section}>
          <Project />
        </Element>
      </div>

      <div ref={screen5Ref} data-section="screen5">
        <Element name="screen5" className={styles.section}>
          <h1>Screen 5</h1>
        </Element>
      </div>
    </main>
  );
};

export default MainPages;
