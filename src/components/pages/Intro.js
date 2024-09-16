import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.hellopage}>Welcome</h1>
      <div className={styles.intro}>
        안녕하세요, 끊임없는 도전을 즐기는 풀스택 개발자 진상훈입니다. 혁신적인
        아이디어를 현실로 만드는 여정에 함께하고 싶습니다
      </div>
    </div>
  );
};

export default Intro;
