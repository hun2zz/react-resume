import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Dockr",
      description:
        "컨테이너화된 애플리케이션을 쉽게 배포하고 관리할 수 있는 플랫폼. 개발자와 운영팀 간의 협업을 원활하게 합니다.",
      color: "MediumSeaGreen",
      skills: ["Docker", "Kubernetes", "Go"],
    },
    {
      title: "AI Chat",
      description:
        "인공지능 기반의 대화형 챗봇 서비스. 자연어 처리 기술을 활용하여 사용자와 자연스러운 대화를 나눕니다.",
      color: "dodgerblue",
      skills: ["Python", "TensorFlow", "NLP"],
    },
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        markers: true,
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
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });
  }, []);

  return (
    <div className={styles.projectContainer}>
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
                <button className={styles.exploreButton}>
                  Explore project
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right} ref={rightRef}>
          <div className={styles.desktopPhotos}>
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
