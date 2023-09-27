import styles from "./Profile.module.scss";

const Profile = () => {
  let user = {
    name: "Mark",
    img: {
      src: "/images/avatar_1.jpeg",
      alt: "Avatar",
    },
  };
  return (
    <div className={styles.profile}>
      <p className={styles.welcome}>Welcome back, </p>
      <p className={styles.user}>{user.name}!</p>
      <img src={user.img.src} className={styles.img} alt={user.img.alt} />
    </div>
  );
};

export default Profile;
