import { Col } from "react-bootstrap";

import styles from "./AboutCard.module.scss";
import { Icon } from "../..";

const AboutCard = ({ icon, title, subtitle }) => {
  return (
    <Col>
      <div className={styles.aboutCard}>
        <div className={styles.aboutCard__icon}>
          <Icon icon={icon} size="2em" />
        </div>
        <div className={styles.aboutCard__content}>
          <h3 className={styles.aboutCard__title}>{title}</h3>
          <p className={styles.aboutCard__subtitle}>{subtitle}</p>
        </div>
      </div>
    </Col>
  );
};

export default AboutCard;
