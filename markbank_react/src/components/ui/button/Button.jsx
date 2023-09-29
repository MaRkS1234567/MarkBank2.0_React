import styles from "./Button.module.scss";

const Button = ({ isError, buttonText, children, width, height, position }) => {
  return (
    <button
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height / 2}px`,
        marginRight: position ? "0" : "auto",
      }}
      className={isError ? styles.button_error : styles.button_normal}
    >
      {buttonText}
      {children}
    </button>
  );
};

export default Button;
