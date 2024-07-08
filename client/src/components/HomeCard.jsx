/* eslint-disable react/prop-types */
import styles from "../pages/Home.module.css";
const HomeCard = ({ title, children }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["headingWrapper"]}>
        <h1 className={styles["heading"]}> {title}</h1>
      </div>
      {children}
    </div>
  );
};

export default HomeCard;
