import styles from "./Profile.module.scss";
import { AvatarGenerator } from "random-avatar-generator";
import { useProfile } from "./useProfile";

const Profile = () => {
  const generator = new AvatarGenerator();

  const { data, isLoading } = useProfile();

  const name = data?.name.split(" ")[0];

  return (
    <div className={styles.profile}>
      <p className={styles.welcome}>Welcome back, </p>
      <p className={styles.user}>{name}!</p>
      <img
        src={generator.generateRandomAvatar(data?.name)}
        className={styles.img}
      />
    </div>
  );
};

export default Profile;
