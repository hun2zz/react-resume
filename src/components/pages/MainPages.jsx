import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // GSAP 라이브러리
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger 플러그인
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import styles from "./MainPages.module.scss";
import MarqueeComponent from "./MarqueeComponent";
import MarqueeCh from "./MarqueeCh";
import ContactMe from "./ContactMe";

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

const MainPages = () => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const [isNavHidden, setIsNavHidden] = useState(false);

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

    // 네비게이션 바 애니메이션
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 아래로 스크롤하고 50px 이상 내려갔을 때
        setIsNavHidden(true);
      } else {
        // 위로 스크롤하거나 50px 미만일 때
        setIsNavHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    // ScrollTrigger 새로고침하여 설정 반영
    ScrollTrigger.refresh();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className={`${styles.navContainer} ${isNavHidden ? styles.hidden : ""}`}
      >
        <NavigationBar />
      </div>
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
          <MarqueeCh
            direction="left"
            texts={["BACKEND", "&", "FRONTEND", "HUN"]}
            rotateAngle={-3}
          />
        </div>
        <div id="project" className={styles.section}>
          <Project />
        </div>
        <div id="screen5" className={styles.section1}>
          <ContactMe />
        </div>
      </div>
    </>
  );
};

export default MainPages;
