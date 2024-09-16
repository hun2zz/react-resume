import React from "react";
import styles from "./Introduce.module.scss";
import profileImage from "../../assets/images/my.jpg"; // 프로필 이미지 경로를 적절히 수정해주세요

const Introduce = () => {
  return (
    <div className={styles.overviewContainer}>
      <h1 className={styles.title}>Overview</h1>

      <div className={styles.infoSection}>
        <div className={styles.column}>
          <h2>Name</h2>
          <p>Samson</p>
          <h2>Residence</h2>
          <p>Seoul</p>
          <h2>Job</h2>
          <p>Artist</p>
        </div>

        <div className={styles.column}>
          <h2>Religion</h2>
          <p>Roman Catholic</p>
          <h2>Baptismal name</h2>
          <p>Augustinus</p>
          <h2>1RM on the big three(Jan 2024)</h2>
          <p>370kg</p>
        </div>

        <div className={styles.column}>
          <h2>Skill</h2>
          <p>Painting</p>
          <p>Illustration</p>
          <p>2D/3D graphic</p>
          <p>UI/UX</p>
          <p>Identity</p>
        </div>

        <div className={styles.column}>
          <h2>Career</h2>
          <p>
            Jambo <span>Co-founder</span>
          </p>
          <p>
            ABT Studio <span>Co-founder</span>
          </p>
          <p className={styles.smallText}>
            I also worked at several other small and medium-sized companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
