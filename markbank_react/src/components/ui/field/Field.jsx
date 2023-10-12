import styles from "./Field.module.scss";

const Field = ({ name, options, ...rest }) => {
  return (
    <div>
      <input {...rest} className={styles.input} />
      {/* {error && <div className={styles.error}>{error}</div>} */}
    </div>
  );
};

export default Field;
