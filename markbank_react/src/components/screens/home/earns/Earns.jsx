import styles from "./Earns.module.scss";
import { TbClick } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Earns = () => {
  return (
    <div className={styles.earns}>
      <div className={styles.money}>
        <img src="images/money3.webp" alt="" className={styles.img} />
      </div>
      <div className="flex white" style={{ "justify-content": "center" }}>
        <div className={styles.click}>
          <TbClick stroke="#fff" />
        </div>
        <div className={styles.text}>
          <p>You have USD 1,000 pending money,</p>
          <p>it will be ready in 2 business days.</p>
        </div>
      </div>
      <NavLink to="/earn">
        <div>
          <p>Get your money now</p>
          <BsArrowRight size={20} fill="#734494" />
        </div>
      </NavLink>
    </div>
  );
};

export default Earns;
