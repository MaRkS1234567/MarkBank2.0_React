import styles from "./Title.module.scss";

const Titles = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};

export default Titles;
