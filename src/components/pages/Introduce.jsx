import React from "react";
import styles from "./Introduce.module.scss";
import myImage from "../../assets/images/my.jpg"; // 이미지 경로를 실제 파일 위치로 수정해주세요

const Introduce = () => {
  return (
    <div className={styles.overviewContainer}>
      <h1 className={styles.title}>Overview.</h1>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          다수의 프로젝트에서 <span className={styles.emphasis}>팀장 역할</span>
          을 수행하며 팀원들끼리의{" "}
          <span className={styles.emphasis}>협업의 중요성</span>을 이해해온
          개발자입니다. 팀원들의{" "}
          <span className={styles.emphasis}>강점을 파악</span>하고 효과적으로
          활용하여 프로젝트의 목표를 달성하는 데 집중할 수 있었고,{" "}
          <span className={styles.emphasis}>기술적 역량</span>과{" "}
          <span className={styles.emphasis}>리더십 스킬</span>을 바탕으로 팀 내{" "}
          <span className={styles.emphasis}>소통을 원활히</span> 하며, 각
          구성원의 잠재력을 끌어내어 프로젝트의{" "}
          <span className={styles.emphasis}>성공적 완수</span>와{" "}
          <span className={styles.emphasis}>팀의 성장</span>을 동시에 이끌어낸
          경험이 있습니다. 여러{" "}
          <span className={styles.emphasis}>협업도구</span>를 사용하는 것에
          대해서 거부감이 없고 서로
          <span className={styles.emphasis}>토론을 통하여 협업</span>하는 것을
          좋아합니다. 이것들을 통해서{" "}
          <span className={styles.emphasis}>조직의 목표 달성</span>에 기여하고자
          합니다.
        </p>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.column}>
          <h2>Profile</h2>
          <img src={myImage} alt="진상훈" className={styles.profileImage} />
        </div>
        <div className={styles.column}>
          <h2>Name</h2>
          <p>진상훈, Jin SangHun</p>
          <h2>Location</h2>
          <p>
            Yeongdeungpo-gu
            <br />
            Seoul, South Korea
          </p>
          <h2>Phone</h2>
          <p>
            <a href="tel:010-5625-4949" className={styles.link}>
              010-5625-4949
            </a>
          </p>
        </div>
        <div className={styles.column}>
          <h2>GitHub</h2>
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
          <h2>Blog</h2>
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
          <h2>Email</h2>
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
