import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Introduce.module.scss";
import myImage from "../../assets/images/my.jpg";

gsap.registerPlugin(ScrollTrigger);

const Introduce = () => {
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const container = containerRef.current;

    // 텍스트를 한 글자씩 분리하여 span 태그로 감싸기
    const splitText = (el) => {
      el.innerHTML = el.textContent
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
    };

    // 모든 p 태그의 텍스트를 분리
    content.querySelectorAll("p").forEach((p) => splitText(p));

    // Introduce 섹션 고정 및 해제 설정과 글자 색상 채우기 애니메이션 결합
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "center center", // Introduce 섹션의 가운데 지점에 도달하면 시작
          
          pin: true, // Introduce 섹션 고정
          scrub: true, // 스크롤에 따라 애니메이션 진행
          markers: true, // 디버그를 위한 마커 표시end: "center+=1300", // 일정 스크롤 길이 후 끝
          onEnter: () => {
            ScrollTrigger.refresh(); // 애니메이션 시작 시 새로고침
          },
        },
      })
      .fromTo(
        content.querySelectorAll("span"), // 모든 개별 글자(span) 선택
        { color: "#22222220" }, // 초기 상태: 글자 회색
        {
          color: "#222", // 애니메이션 종료 후: 글자 검정색
          stagger: 0.05, // 애니메이션 간격 조정 (각 글자마다)
          ease: "power1.inOut", // 애니메이션 효과
          duration: 1, // 각 글자에 대한 애니메이션 지속 시간
        }
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.overviewContainer}>
      <h2 className={styles.title}>Overview</h2>
      <div ref={contentRef} className={styles.contentContainer}>
        <p className={styles.content}>
          다수의 프로젝트에서 <span className={styles.emphasis}>팀장 역할</span>
          을 수행하며 팀원들끼리의{" "}
          <span className={styles.emphasis}>협업의 중요성</span>을 이해해온
          개발자입니다.
          <br /> 팀원들의 <span className={styles.emphasis}>강점을 파악</span>
          하고 효과적으로 활용하여 프로젝트의 목표를 달성하는 데 집중할 수
          있었고, <br />
          <span className={styles.emphasis}>기술적 역량</span>과{" "}
          <span className={styles.emphasis}>리더십 스킬</span>을 바탕으로 팀 내{" "}
          <span className={styles.emphasis}>소통을 원활히</span> 하며, <br />각
          구성원의 잠재력을 끌어내어 프로젝트의{" "}
          <span className={styles.emphasis}>성공적 완수</span>와{" "}
          <span className={styles.emphasis}>팀의 성장</span>을 동시에 이끌어낸
          경험이 있습니다. <br />
          여러 <span className={styles.emphasis}>협업도구</span>를 사용하는 것에
          대해서 거부감이 없고 <br />
          서로
          <span className={styles.emphasis}>토론을 통하여 협업</span>하는 것을
          좋아합니다. <br />
          이것들을 통해서{" "}
          <span className={styles.emphasis}>조직의 목표 달성</span>에 기여하고자
          합니다.
        </p>
      </div>
      <div className={styles.infoSection}>
        {/* <div className={styles.column}>
          <h2>Profile</h2>
          <img src={myImage} alt="진상훈" className={styles.profileImage} />
        </div> */}
        <div className={styles.column}>
          <h3>Name</h3>
          <p>진상훈, Jin SangHun</p>
          <h3>Location</h3>
          <p>
            Yeongdeungpo-gu, Seoul, South Korea
          </p>
          <h3>Phone</h3>
          <p>
            <a href="tel:010-5625-4949" className={styles.link}>
              010-5625-4949
            </a>
          </p>
        </div>
        <div className={styles.column}>
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/hun2zz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://github.com/hun2zz
            </a>
          </p>
          <h3>Blog</h3>
          <p>
            <a
              href="https://blog.naver.com/sanghun_0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://blog.naver.com/sanghun_0
            </a>
          </p>
          <h3>Email</h3>
          <p>
            <a href="mailto:tkdgnsdldkdlel@naver.com" className={styles.link}>
              tkdgnsdldkdlel@naver.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
