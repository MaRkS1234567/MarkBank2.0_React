import styles from "./Transaction.module.scss";

const Transaction = ({ children, name, desc, date, time, sum, isWriteOff }) => {
  return (
    <div className={styles.transaction}>
      <div className={isWriteOff ? styles.icon_red : styles.icon}>
        {children}
      </div>
      <div className={styles.name}>
        <p>{name}</p>
        <span>{desc}</span>
      </div>
      <div className={styles.date}>
        <p>{date}</p>
        <span>{time}</span>
      </div>
      <div className={styles.sum}>
        <p className={isWriteOff ? styles.usd_red : styles.usd}>USD</p>
        <p className={isWriteOff ? styles.amount_red : styles.amount}>{sum}</p>
      </div>
    </div>
  );
};

export default Transaction;
