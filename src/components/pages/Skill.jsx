import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Skill.module.scss";
import MarqueeSkill from "./MarqueeSkill";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const skillSectionRef = useRef(null);
  const [speed, setSpeed] = useState(0);

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
  ];

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const newSpeed = 5 + scrollPercentage * 20;
      setSpeed(newSpeed);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setSpeed(0);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            <div className={styles.categoryWrapper}>
              <MarqueeSkill
                text={skillCategory.technologies}
                speed={speed}
                direction="left"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
