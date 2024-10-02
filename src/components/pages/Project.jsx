import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCursor from "react-animated-cursor";
import styles from "./Project.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const galleryRef = useRef(null);
  const rightRef = useRef(null);
  const projectRefs = useRef([]);
  const photoRefs = useRef([]);

  const projects = [
    {
      title: "3on3",
      description:
        "대학생들의 소개팅을 위한 플랫폼. 사용자 친화적인 인터페이스와 매칭 알고리즘을 통해 대학생들의 만남을 주선합니다.",
      color: "crimson",
      skills: [
        "Java",
        "Spring Boot",
        "MySQL",
        "Redis",
        "AWS(EC2)",
        "AWS(S3)",
        "AWS(RDS)",
        "Docker",
        "JPA",
        "React",
      ],
    },
    {
      title: "애착 페이지",
      description:
        "사람들은 누구나 기댈 곳이 필요하고 생각을 비우거나 정리하는 시간이 필요하다고 느껴 여러 사람과 소통하면서 마음을 비울 수 있는 공간입니다",
      color: "MediumSeaGreen",
      skills: [
        "Java",
        "Spring Boot",
        "MySQL",
        "HTML/CSS",
        "MyBatis",
        "WebSocket",
      ],
    },
    // {
    //   title: "AI Chat",
    //   description:
    //     "인공지능 기반의 대화형 챗봇 서비스. 자연어 처리 기술을 활용하여 사용자와 자연스러운 대화를 나눕니다.",
    //   color: "dodgerblue",
    //   skills: ["Python", "TensorFlow", "NLP"],
    // },
  ];

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const onEnterFrame = () => {
    setCursorText("View");
    setCursorVariant("project");
    document.body.style.cursor = "none";
  };

  const onLeaveFrame = () => {
    setCursorText("");
    setCursorVariant("default");
    document.body.style.cursor = "auto";
  };

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom+=2% bottom", // 여기를 수정했습니다
        pin: rightRef.current,
      });

      gsap.set(photoRefs.current.slice(1), { yPercent: 101 });

      projectRefs.current.forEach((project, index) => {
        if (index === 0) return;

        let headline = project.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photoRefs.current[index], { yPercent: 0 })
          .set(photoRefs.current[index - 1], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 40%", // 끝 지점을 더 위로 올림
          animation: animation,
          scrub: 1,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });
  }, []);

  return (
    <div className={styles.projectContainer}>
      <AnimatedCursor
        innerSize={4}
        outerSize={30}
        color={cursorVariant === "project" ? "#eeff04" : "#ffffff"}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: `1.5px solid ${
            cursorVariant === "project" ? "#eeff04" : "#ffffff"
          }`,
        }}
        innerStyle={{
          backgroundColor: cursorVariant === "project" ? "#eeff04" : "#ffffff",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        textColor={cursorVariant === "project" ? "#000000" : "#ffffff"}
        text={cursorText}
        showSystemCursor={false}
      />

      <div className={styles.spacer}></div>
      <div className={styles.gallery} ref={galleryRef}>
        <div className={styles.left}>
          <div className={styles.desktopContent}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.desktopContentSection}
                ref={(el) => (projectRefs.current[index] = el)}
              >
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <ul className={styles.skillsList}>
                  {project.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
                <button className={styles.exploreButton}>View Project</button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right} ref={rightRef}>
          <div
            className={styles.desktopPhotos}
            onMouseEnter={onEnterFrame}
            onMouseLeave={onLeaveFrame}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.desktopPhoto} ${styles[project.color]}`}
                ref={(el) => (photoRefs.current[index] = el)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
};

export default Project;
