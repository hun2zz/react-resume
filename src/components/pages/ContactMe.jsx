import React from "react";
import styles from "./ContactMe.module.scss";
import customQRCode from "../../assets/images/github.png";
import customQRCode2 from "../../assets/images/Untitled.png";
import MarqueeCh from "./MarqueeCh";

const ContactMe = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <p>
            HOME
            <br />
            PROJECT
            <br />
            ABOUT
          </p>
          <p>
            Contact Phone
            <br />
            010.5625.4949
          </p>
          <p>
            Email us
            <br />
            tkdgnsdldkdlel@naver.com
          </p>
        </div>
      </div>

      <MarqueeCh
        direction="right"
        texts={["READY", "TO", "JOIN", "YOUR", "TEAM"]}
        rotateAngle={0}
        emphasisIndices={[1]} // "CREATE"를 첫 번째 강조색으로
        secondaryEmphasisIndices={[3]} // "AMAZING"을 두 번째 강조색으로
      />
      <MarqueeCh
        direction="left"
        texts={["READY", "TO", "JOIN", "YOUR", "TEAM"]}
        rotateAngle={0}
      />

      <div className={styles.footer}>
        <div className={styles.qrCodes}>
          <div>
            <p>ADD US TO WECHAT OR TELEGRAM</p>
            <div className={styles.qrCodeContainer}>
              <img
                src={customQRCode}
                alt="Custom QR Code with WeChat logo"
                width={128}
                height={128}
              />
              <img
                src={customQRCode2}
                alt="Custom QR Code with WeChat logo"
                width={128}
                height={128}
              />
            </div>
          </div>
        </div>
        <div className={styles.location}>
          <p>LOCATION</p>
          <p>JinXiu lu, 225-11-1622, Shanghai, PRC</p>
          <p>FOLLOW US</p>
          <p>INSTAGRAM ↗</p>
          <p>VIMEO ↗</p>
        </div>
        <div className={styles.backToTop}>
          <p>Crafted by Lynksen</p>
          <button>BACK TO THE TOP ▲</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
