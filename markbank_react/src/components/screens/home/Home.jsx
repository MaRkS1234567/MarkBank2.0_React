import Layout from "../../layout/Layout";
import styles from "./Home.module.scss";
import Amount from "./amount/Amount";
import Cards from "./cards/Cards";
import Contacts from "./contacts/Contacts";
import Earns from "./earns/Earns";
import History from "./history/History";
import Invites from "./invites/Invites";

const Home = () => {
  return (
    <>
      <Layout></Layout>
      <div className="inline">
        <div className={styles.left}>
          <Cards />
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