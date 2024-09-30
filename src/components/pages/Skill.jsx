import React, { useEffect, useRef } from "react";
import styles from "./Skill.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const skills = [
    {
      category: "FrontEnd",
      technologies: ["JavaScript,", "HTML/CSS,", "React.js,", "SCSS"],
    },
    {
      category: "BackEnd",
      technologies: [
        "Java,",
        "Groovy,",
        "NodeJS,",
        "Spring Web,",
        "Spring Boot,",
        "Spring MVC,",
        "Spring Security,",
        "Spring Data JPA,",
        "Querydsl,",
        "MyBatis,",
        "Redis,",
        "JWT(JSON Web Token),",
        "WebSocket,",
        "Hibernate,",
        "Junit4/5,",
        "Gradle,",
        "Maven",
      ],
    },

    {
      category: "DevOps",
      technologies: [
        "MySQL,",
        "MariaDB,",
        "GithubAction,",
        "AWS RDS,",
        "AWS S3,",
        "AWS EC2,",
        "Docker",
      ],
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const items = itemRefs.current;

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: container,
        start: `top+=${index * 20}% center`, // 33%에서 20%로 변경
        end: `bottom-=${(items.length - index - 1) * 20}% center`, // 끝 지점 조정
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(item, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power2.in",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.overviewContainer} ref={containerRef}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>FRONTEND & BACKEND</h1>
      </div>
      <div className={styles.border}></div>
      <div className={styles.infoSection}>
        {skills.map((skillGroup, groupIndex) => (
          <div
            key={groupIndex}
            className={styles.skillGroup}
            ref={(el) => (itemRefs.current[groupIndex] = el)}
          >
            <div className={styles.skillMeta}>
              <span className={styles.category}>{skillGroup.category}</span>
            </div>
            <div className={styles.skillContent}>
              <ul>
                {skillGroup.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className={styles.skillItem}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
