import styles from "./Contacts.module.scss";
import Titles from "../../../ui/title/Title";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Contact from "../../../ui/contact/Contact";
import { AvatarGenerator } from "random-avatar-generator";

const Contacts = () => {
  const generator = new AvatarGenerator();
  return (
    <div className={styles.contacts}>
      <div className={styles.top}>
        <Titles>Recent Contacts</Titles>
        <NavLink to="/activity">All Contacts</NavLink>
      </div>
      <div className={styles.container}>
        <div className={styles.add}>
          <div className={styles.dash}>
            <AiOutlinePlus size={22} fill="#734494" />
          </div>
          <p>Add</p>
        </div>
        <div className={styles.all_contacts}>
          <Contact name={"Red Fall"} url={"images/red_fall.jpg"} />
          <Contact
            name={"Alina S"}
            url={generator.generateRandomAvatar("Alina")}
          />
          <Contact
            name={"Cathrine"}
            url={generator.generateRandomAvatar("Cathrine")}
          />
          <Contact
            name={"Bella P"}
            url={generator.generateRandomAvatar("Bella")}
          />
          <Contact
            name={"Corbyn"}
            url={generator.generateRandomAvatar("Corbyn")}
          />
          <Contact
            name={"Edward"}
            url={generator.generateRandomAvatar("Edward")}
          />
          <Contact
            name={"Jeanne"}
            url={generator.generateRandomAvatar("Jeanne")}
          />
          <Contact
            name={"Joe Der"}
            url={generator.generateRandomAvatar("Joe")}
          />
          <Contact
            name={"Justin B"}
            url={generator.generateRandomAvatar("Justin")}
          />
          <Contact
            name={"Lea Tan"}
            url={generator.generateRandomAvatar("Lea")}
          />
          <Contact
            name={"Mickle J"}
            url={generator.generateRandomAvatar("Mickle")}
          />
          <Contact
            name={"Rig Mor"}
            url={generator.generateRandomAvatar("Rig")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
