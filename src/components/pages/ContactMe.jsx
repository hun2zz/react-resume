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

      <div className={styles.marq}>
        <MarqueeCh
          direction="right"
          texts={["감사합니다", "THANK", "YOU", "CONTACT"]}
          rotateAngle={0}
          emphasisIndices={[0, 3]}
          secondaryEmphasisIndices={[1, 2]}
        />
        <MarqueeCh
          direction="left"
          texts={["감사합니다", "THANK", "YOU", "CONTACT"]}
          rotateAngle={0}
          emphasisIndices={[0, 3]}
          secondaryEmphasisIndices={[1, 2]}
        />
      </div>

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
          <p className={styles.locationTitle}>LOCATION</p>
          <p>Yeongdeungpo-gu, Seoul, South Korea</p>
        </div>
        <div className={styles.backToTop}>
          <p className={styles.madeBy}>Made By</p>
          <p>JIN SANGHUN.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
