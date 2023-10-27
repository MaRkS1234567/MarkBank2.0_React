import Button from "../../../../ui/button/Button";
import styles from "./CardAlert.module.scss";

const CardAlert = ({ text1, text2, message, clickHandler1, clickHandler2 }) => {
  return (
    <div className={styles.alert}>
      <p>{message}</p>
      <div>
        <Button
          clickHandler={clickHandler1}
          buttonText={text1}
          type={"purple"}
        />
        <Button clickHandler={clickHandler2} buttonText={text2} />
      </div>
    </div>
  );
};

export default CardAlert;
