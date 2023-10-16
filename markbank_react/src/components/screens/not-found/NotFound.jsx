import styles from "./NotFound.module.scss";
import Layout from "../../layout/Layout";
import { useAuth } from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const NotFound = () => {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth && <Layout />}
      <div
        className={styles.notFound}
        style={{
          paddingBottom: !isAuth && "50px",
        }}
      >
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
        {!isAuth && (
          <NavLink to="/auth">
            <div>
              <p>Register or Sign In</p>
              <BsArrowRight size={25} fill="#734494" />
            </div>
          </NavLink>
        )}
      </div>
    </>
  );
};

export default NotFound;
