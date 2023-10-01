import Titles from "../../../ui/title/Title";
import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { User } from "../../../../models/User.model.js";
import { useState } from "react";
import SvgLink from "../../../ui/svg-link/SvgLink";
import { IoCardOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Button from "../../../ui/button/Button";

const Card = () => {
  const [cvvShow, setCvvShow] = useState(true);
  return (
    <>
      <div className={styles.cards_top}>
        <Titles>Cards</Titles>
        <NavLink to="/cards">Show all</NavLink>
      </div>
      <div className={styles.cards_middle}>
        <div className={styles.fignya}></div>
        <div className={styles.card}>
          <div className={styles.full_name}>
            {User.first_name} {User.last_name}
            <img className={styles.svg} src="/images/mastercard.svg" alt="" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex">
            <p className={styles.number}>{User.card.number}</p>
            <p onClick={() => setCvvShow(!cvvShow)} className={styles.cvv}>
              {cvvShow === true ? "cvv" : User.card.cvv}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cards_bottom}>
        <SvgLink linkText={"Show Card Details"}>
          <IoCardOutline size={22} stroke="#b3b3b3" />
        </SvgLink>
        <SvgLink linkText={"Your PIN"}>
          <BsThreeDots size={22} fill="#b3b3b3" />
        </SvgLink>
        <SvgLink linkText={"Security Code"}>
          <HiOutlineLockClosed size={22} stroke="#b3b3b3" />
        </SvgLink>
        <SvgLink linkText={"Edit Limits"}>
          <HiOutlineAdjustmentsHorizontal size={22} stroke="#b3b3b3" />
        </SvgLink>
        <div className={styles.buttons}>
          <Button
            buttonText={"Add Card"}
            isError={false}
            width={150}
            height={50}
          >
            <AiOutlinePlus size={17} fill="#fff" />
          </Button>
          <Button
            buttonText={"Remove"}
            isError={true}
            width={150}
            height={50}
            position={"right"}
          >
            <AiOutlineMinus size={17} fill="#ed513e" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
