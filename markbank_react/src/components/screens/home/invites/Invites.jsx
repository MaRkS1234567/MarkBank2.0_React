import styles from "./Invites.module.scss";
import { FaCopy } from "react-icons/fa6";
import { User } from "../../../../models/User.model.js";
import { useProfile } from "../../../layout/header/profile/useProfile";

const Invites = () => {
  const { data } = useProfile();

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let date = new Date();
  const code =
    "AbelCollier".toUpperCase().replace(/\s/g, "") +
    "-" +
    monthNames[date.getMonth()] +
    date.getFullYear();
  return (
    <div className={styles.invites}>
      <div className={styles.content}>
        <p className={styles.text}>
          Invite a friend with code below and redeem special bonus USD 15 from
          us!
        </p>
        <div className={styles.code}>
          <p>{code}</p>
          <div>
            <FaCopy
              fill="#fff"
              size={23}
              onClick={() => {
                navigator.clipboard.writeText(code);
                alert("copied to clipboard!");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invites;
