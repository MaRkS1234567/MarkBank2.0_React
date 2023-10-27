import styles from "./Alert.module.scss";
import cn from "clsx";

const Alert = ({ text, isError }) => {
  setTimeout(function () {
    document.getElementById("alertEl").className += " three_seconds";
  }, 3000);

  setTimeout(function () {
    document.getElementById("alertEl").style.display = "none";
  }, 3700);

  return (
    <div className={cn(styles.alert, isError && styles.is_error)} id="alertEl">
      {text}
    </div>
  );
};

export default Alert;
