import React, { useEffect, useRef } from "react";
import styles from "./Skill.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const skillSectionRef = useRef(null);
  const categoryRefs = useRef([]);
  const skills = [
    {
      category: "BackEnd",
      technologies: [
        "Java",
        "Groovy",
        "NodeJS",
        "Spring Web",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Querydsl",
        "MyBatis",
        "Redis",
        "JWT(JSON Web Token)",
        "WebSocket",
        "Hibernate",
        "Junit4/5",
        "Gradle",
        "Maven",
      ],
    },
    {
      category: "DevOps",
      technologies: [
        "MySQL",
        "MariaDB",
        "GithubAction",
        "AWS RDS",
        "AWS S3",
        "AWS EC2",
        "Docker",
      ],
    },
    {
      category: "FrontEnd",
      technologies: ["JavaScript", "HTML/CSS", "React.js", "SCSS"],
    },
  ];

  useEffect(() => {
    const triggers = [];

    categoryRefs.current.forEach((category, index) => {
      const inner = category.querySelector(`.${styles.categoryInner}`);
      const direction = index % 2 === 0 ? -1 : 1; // 짝수 인덱스는 왼쪽, 홀수 인덱스는 오른쪽으로 이동

      // 모든 카테고리에 대해 동일한 초기 위치 설정
      gsap.set(inner, { xPercent: direction * 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      tl.to(inner, {
        xPercent: direction * -30, // 반대 방향으로 30% 이동
        ease: "none",
        duration: 5,
      });

      triggers.push(tl.scrollTrigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.overviewContainer} ref={skillSectionRef}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleLine}></div>
        <h1 className={styles.title}>Skill.</h1>
        <div className={styles.titleLine}></div>
      </div>
      <p className={styles.subtitle}>
        프로젝트에서 사용하거나 공부한 기술들입니다.
      </p>
      <div className={styles.infoSection}>
        {skills.map((skillCategory, index) => (
          <div key={index} className={styles.column}>
            <div
              className={styles.categoryWrapper}
              ref={(el) => (categoryRefs.current[index] = el)}
            >
              <div
                className={`${styles.categoryInner} ${
                  skillCategory.category === "DevOps" ? styles.reverse : ""
                }`}
              >
                {Array(40)
                  .fill(null)
                  .map((_, i) => (
                    <React.Fragment key={i}>
                      <span>{skillCategory.category}</span>
                      <div className={styles.circle}></div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
            <div className={styles.skillListWrapper}>
              {skillCategory.technologies.map((tech, techIndex) => (
                <div key={techIndex} className={styles.skillItem}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
