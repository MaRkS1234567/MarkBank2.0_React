import Profile from "./profile/Profile";
import TopBar from "./top-bar/TopBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/logo.svg" className={styles.logo} />
      <Profile />
      <TopBar />
    </div>
  );
};

export default Header;
