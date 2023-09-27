import Layout from "../../layout/Layout";
import styles from "./Home.module.scss";
import Amount from "./amount/Amount";
import Cards from "./cards/Cards";
import Earns from "./earns/Earns";

const Home = () => {
  return (
    <>
      <Layout></Layout>
      {/* <div className="flex"> */}
      <div className="block">
        <Cards />
        <Earns />
      </div>
      {/* <div className="block">
          <div className="flex">
          <Amount />
          <Invites />
          </div>
          <Contacts />
          <History />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
