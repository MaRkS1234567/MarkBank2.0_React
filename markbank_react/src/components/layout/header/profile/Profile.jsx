import styles from "./Profile.module.scss";
import { User } from "../../../../models/User.model.js";
import { AvatarGenerator } from "random-avatar-generator";

const Profile = () => {
  const generator = new AvatarGenerator();
  return (
    <div className={styles.profile}>
      <p className={styles.welcome}>Welcome back, </p>
      <p className={styles.user}>{User.first_name}!</p>
      <img
        src={generator.generateRandomAvatar("Mark")}
        className={styles.img}
        alt={User.img.alt}
      />
    </div>
  );
};

export default Profile;
