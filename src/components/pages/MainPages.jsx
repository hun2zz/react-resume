import React, { useEffect, useRef } from "react";
import gsap from "gsap"; // GSAP 라이브러리
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger 플러그인
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import styles from "./MainPages.module.scss";
import MarqueeComponent from "./MarqueeComponent";

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

const MainPages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger 초기화
    ScrollTrigger.refresh();

    // 첫 번째 애니메이션: Introduce 섹션에 들어갈 때 배경색 변경
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#222" }, // 초기 배경색
      {
        backgroundColor: "#eeff04", // 변경될 배경색
        // ease: "none", // 애니메이션 효과 없음
        ease: "power2.inOut", // 이징 함수 적용
        scrollTrigger: {
          trigger: "#introduce", // 트리거 요소
          start: "top bottom", // 트리거 시작 지점 조정
          end: "top top", // 트리거 끝 지점 조정
          scrub: true, // 스크롤에 따라 애니메이션 진행
          markers: true,
        },
      }
    );

    // 두 번째 애니메이션: Skill 섹션으로 이동할 때 배경색 원래 색으로 변경
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: "#eeff04" }, // 현재 노란색 배경
      {
        backgroundColor: "#222", // 변경될 배경색 (원래 색)
        ease: "none", // 애니메이션 효과 없음
        scrollTrigger: {
          trigger: "#skill", // 다음 섹션 트리거
          start: "top bottom", // 트리거 시작 지점 조정
          end: "top top", // 트리거 끝 지점 조정
          scrub: true, // 스크롤에 따라 애니메이션 진행
        },
      }
    );

    // // Introduce 섹션 중앙에서 화면 고정
    // gsap.to(containerRef.current, {
    //   scrollTrigger: {
    //     trigger: "#introduce",
    //     start: "center center", // introduce 섹션의 중간
    //     end: "bottom center", // introduce 섹션의 끝에서 해제
    //     pin: true, // 화면 고정
    //     pinSpacing: false, // pinning 시 추가되는 공간을 없앰
    //   },
    // });

    // ScrollTrigger 새로고침하여 설정 반영
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <NavigationBar />
      <div ref={containerRef} className={styles.container}>
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
      </div>
    </>
  );
};

export default MainPages;
