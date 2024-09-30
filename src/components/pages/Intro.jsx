import React from "react";
import styles from "./Intro.module.scss";
import NavigationBar from "./NavigationBar";

const Intro = () => {
  return (
    <>

      <div className={styles.container}>
        <h1 className={styles.hellopage}>
          I'm JIN SANGHUN,
          <br />
          a Full Stack
          <br />
          <b> developer.</b>
        </h1>
        <div className={styles.intro}>
          안녕하세요. 끊임없는 도전을 즐기는 <b>풀스택 개발자 진상훈</b>입니다.{" "}
          <br />
          혁신적인 아이디어를 현실로 만드는 여정에 함께하고 싶습니다
        </div>
      </div>
    </>
  );
};

export default Intro;
