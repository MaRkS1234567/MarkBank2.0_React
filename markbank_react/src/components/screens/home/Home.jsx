import { useState } from "react";
import Layout from "../../layout/Layout";
import styles from "./Home.module.scss";
import Amount from "./amount/Amount";
import Card from "./card/Card";
import Contacts from "./contacts/Contacts";
import Earns from "./earns/Earns";
import History from "./history/History";
import Invites from "./invites/Invites";
import AddCard from "./add-card/AddCard";

const Home = () => {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <>
      <Layout></Layout>
      <div className="inline">
        <div className={styles.left}>
          {!isAdd ? (
            <Card isAdd={isAdd} setIsAdd={setIsAdd} />
          ) : (
            <AddCard isAdd={isAdd} setIsAdd={setIsAdd} />
          )}
          <Earns />
        </div>
        <div className={styles.right}>
          <div className="inline">
            <Amount />
            <Invites />
          </div>
          <Contacts />
          <History />
        </div>
      </div>
    </>
  );
};

export default Home;
