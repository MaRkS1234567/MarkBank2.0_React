import Layout from "../../layout/Layout";
import styles from "./Cards.module.scss";
import CardsList from "./cards-list/CardsList";

const Cards = () => {
  return (
    <>
      <Layout></Layout>
      <div className="inline">
        <div className={styles.left}>
          <CardsList></CardsList>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
};

export default Cards;
