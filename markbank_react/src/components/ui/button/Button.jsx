import styles from "./Button.module.scss";

const Button = ({ type, buttonText, children, width, height, position }) => {
  return (
    <button
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        marginRight: position ? "0" : "auto",
      }}
      className={
        type === "purple"
          ? styles.button_purple
          : type === "error"
          ? styles.button_error
          : styles.button_common
      }
    >
      {buttonText}
      {children}
    </button>
  );
};

export default Button;
