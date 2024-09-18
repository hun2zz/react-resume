import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Project.module.scss";
import gwatingImage from "../../assets/images/gwating.png";
import dockr from "../../assets/images/myAss.png";

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
      title: "대학생들의 소개팅을 위한 플랫폼",
      description:
        "코로나 이후 사람을 만나기 어색해진 사람들을 위한 과팅 플랫폼",
      image: gwatingImage,
      date: "2024. 07.17 - 2024. 08.29",
      team: "3on3",
      members: "풀스택 개발자 6명",
      goal: "코로나 이후 사람을 만나기 어색해진 사람들을 위한 과팅 플랫폼",
      keyPoints: [
        "- RESTful API 설계 및 구현을 통한 미팅 그룹 CRUD 기능 개발",
        "- Redis를 활용한 24시간 유효 초대코드 생성 및 관리 시스템 구축",
        "- 초대 링크 원클릭 가입 프로세스를 위한 백엔드 로직 구현",
        "- 그룹 호스트 권한 관리 시스템 개발 (참여 승인/거절, 멤버 추방 기능)",
        "- Java Mail Sender를 이용한 회원탈퇴 이메일 인증 프로세스 구현",
        "- AWS EC2 인스턴스에 Docker 컨테이너화된 애플리케이션 배포 및 도메인 연결",
        "- 팀 리더로서 GitHub 저장소 관리, merge 충돌 해결 주도",
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
    {
      title: "마음에 여유가 없는 사람들을 위한 페이지",
      description: "여러 사람과 소통하면서 마음을 비울 수 있는 공간",
      image: dockr,
      date: "2024. 07.17 - 2024. 08.29",
      team: "편히쉬조",
      members: "풀스택 개발자 5명",
      goal: "사람들은 누구나 기댈 곳이 필요하고 생각을 비우거나 정리하는 시간이 필요하다고 느껴 여러 사람과 소통하면서 마음을 비울 수 있는 공간",
      keyPoints: [
        "- WebSocket 프로토콜을 활용한 실시간 양방향 통신 시스템 구축으로 사용자 간 즉각적 상호작용 구현",
        "- 동적 로드 밸런싱 로직을 개발해서 최대인원(50)명을 제한 및 자동 분배 시스템 구현으로 서버 부하 관리",
        "- 관리자 컨트롤 보드를 개발해서 실시간 주제 변경 시 전체 사용자 자동으로 마이그레이션 로직 구현",
        "- 관리자 대시보드로 실시간 채팅 주제 설정 및 모니터링 기능 구현으로 운영 효율성 증가",
        "- 팀 리더로서 Git 기반 협업 환경 최적화 merge 전략 수립 및 충돌 해결 주도",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "MySQL",
        "HTML/CSS",
        "MyBatis",
        "WebSocket",
      ],
      references: [
        {
          title: "GitHub 저장소",
          link: "https://github.com/project5jo/maroon5",
        },
      ],
    },
    
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
        Projects that develop my skills.
        <br />
        JAVA, React, AWS, Docker...
      </p>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() => openModal(project)}
          >
            <div className={styles.projectFrame}>
              <img src={project.image} alt={project.title} />
              <div className={styles.projectOverlay}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </div>
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
