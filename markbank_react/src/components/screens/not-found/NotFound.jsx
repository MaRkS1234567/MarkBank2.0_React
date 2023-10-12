import styles from "./NotFound.module.scss";
import Layout from "../../layout/Layout";

const NotFound = () => {
  return (
    <>
      <Layout />
      <div className={styles.notFound}>
        <div className={styles.error}>
          <p
            style={{
              color: "#734494",
              marginRight: "30px",
              fontWeight: "600",
            }}
          >
            404
          </p>
          <p>Page Not Found</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
