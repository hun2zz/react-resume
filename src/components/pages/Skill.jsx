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
        "Java", "Groovy", "NodeJS", "Spring Web", "Spring Boot", "Spring MVC",
        "Spring Security", "Spring Data JPA", "Querydsl", "MyBatis", "Redis",
        "JWT(JSON Web Token)", "WebSocket", "Hibernate", "Junit4/5", "Gradle", "Maven",
      ],
    },
    {
      category: "DevOps",
      technologies: [
        "MySQL", "MariaDB", "GithubAction", "AWS RDS", "AWS S3", "AWS EC2", "Docker",
      ],
    },
    {
      category: "FrontEnd",
      technologies: ["JavaScript", "HTML/CSS", "React.js", "SCSS"],
    },
  ];

  useEffect(() => {
    categoryRefs.current.forEach((category, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      
      gsap.to(category.querySelector(`.${styles.categoryInner}`), {
        xPercent: direction * 100,
        ease: "none",
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
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
            <div className={styles.categoryWrapper} ref={(el) => (categoryRefs.current[index] = el)}>
              <div className={styles.categoryInner}>
                {Array(20).fill(null).map((_, i) => (
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
