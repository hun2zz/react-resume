import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Project.module.scss";
import gwatingImage from "../../assets/images/gwating.png";

const Modal = ({ project, onClose }) => {
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent} ref={modalRef}>
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <div className={styles.modalInfo}>
          <p>
            <span className={styles.emphasis}>기간:</span> {project.date}
          </p>
          <p>
            <span className={styles.emphasis}>팀명:</span> {project.team}
          </p>
          <p>
            <span className={styles.emphasis}>인력구성:</span> {project.members}
          </p>
          <p>
            <span className={styles.emphasis}>프로젝트 목적:</span>{" "}
            {project.goal}
          </p>
        </div>
        <h3 className={styles.modalSubtitle}>주요업무 및 상세역할:</h3>
        <ul className={styles.modalList}>
          {project.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <h3 className={styles.modalSubtitle}>사용 기술:</h3>
        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
        <h3 className={styles.modalSubtitle}>참고 자료:</h3>
        <ul className={styles.modalList}>
          {project.references.map((ref, index) => (
            <li key={index}>
              <a href={ref.link} target="_blank" rel="noopener noreferrer">
                {ref.title}
              </a>
            </li>
          ))}
        </ul>
        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>,
    document.body
  );
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "대학생들끼리의 과팅을 위한 플랫폼 개발 및 배포",
      image: gwatingImage,
      date: "2024. 07.17 - 2024. 08.29",
      team: "3on3",
      members: "풀스택 개발자 6명",
      goal: "코로나 이후 사람을 만나기 어색해진 사람들을 위한 과팅 플랫폼",
      keyPoints: [
        "RESTful API 설계 및 구현을 통한 미팅 그룹 CRUD 기능 개발",
        "Redis를 활용한 24시간 유효 초대코드 생성 및 관리 시스템 구축",
        "초대 링크 원클릭 가입 프로세스를 위한 백엔드 로직 구현",
        "그룹 호스트 권한 관리 시스템 개발 (참여 승인/거절, 멤버 추방 기능)",
        "Java Mail Sender를 이용한 회원탈퇴 이메일 인증 프로세스 구현",
        "AWS EC2 인스턴스에 Docker 컨테이너화된 애플리케이션 배포 및 도메인 연결",
        "팀 리더로서 GitHub 저장소 관리, merge 충돌 해결 주도",
      ],
      techStack: [
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
      references: [
        { title: "GitHub 저장소", link: "#" },
        { title: "프로젝트 시연 영상", link: "#" },
        { title: "프로젝트 PPT", link: "#" },
      ],
    },
    // ... 다른 프로젝트들
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.title}>Project.</h1>
      <p className={styles.subtitle}>
        The work I did to make a living.
        <br />
        2D/3D graphic, illustration, UI/UX, brand identity, creative direction
        and etc
      </p>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Project;
