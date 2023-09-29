import styles from "./SvgLink.module.scss";
import { BsChevronRight } from "react-icons/bs";

const SvgLink = ({ linkText, children }) => {
  return (
    <div className={styles.svgLink}>
      <div className={styles.icon}>{children}</div>
      <p className={styles.text}>{linkText}</p>
      <button className={styles.button}>
        <BsChevronRight className={styles.arrow} size={17} fill="#b3b3b3" />
      </button>
    </div>
  );
};

export default SvgLink;
