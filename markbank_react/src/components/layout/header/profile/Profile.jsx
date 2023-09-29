import styles from "./Profile.module.scss";
import { User } from "../../../../models/User.model.js";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <p className={styles.welcome}>Welcome back, </p>
      <p className={styles.user}>{User.first_name}!</p>
      <img src={User.img.src} className={styles.img} alt={User.img.alt} />
    </div>
  );
};

export default Profile;
