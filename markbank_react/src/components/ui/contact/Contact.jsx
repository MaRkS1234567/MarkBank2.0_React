import styles from "./Contact.module.scss";

const Contact = ({ url, name }) => {
  return (
    <div className={styles.contact}>
      <img src={url} />
      <p>{name}</p>
    </div>
  );
};

export default Contact;
