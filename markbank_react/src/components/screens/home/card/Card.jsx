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
import { useProfile } from "../../../layout/header/profile/useProfile";
import Alert from "../../../ui/alert/Alert";
import CardAlert from "./card-alert/CardAlert";

const Card = ({ isAdd, setIsAdd }) => {
  const [cvvShow, setCvvShow] = useState(true);
  const [deleteShow, setDeleteShow] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const { data, isLoading } = useProfile();

  return (
    <>
      <div className={styles.cards_top}>
        <Titles>Cards</Titles>
        <NavLink to="/cards">Show all</NavLink>
      </div>
      <div className={styles.cards_middle}>
        <div className={styles.fignya}></div>
        {addShow ? (
          <CardAlert
            text1="Add"
            text2="Create"
            message="Would you like to create or add new card?"
            clickHandler1={() => setIsAdd(true)}
            clickHandler2={() => {
              setIsCreate(true);
              setAddShow(false);
              setDeleteShow(false);
            }}
          />
        ) : deleteShow ? (
          <CardAlert
            text1="Delete"
            text2="Cancel"
            message="Would you like to delete card?"
            clickHandler1={() => {
              setAddShow(false);
              setDeleteShow(false);
            }}
            clickHandler2={() => {
              setAddShow(false);
              setDeleteShow(false);
            }}
          />
        ) : (
          <div className={styles.card}>
            <div className={styles.full_name}>
              {data?.name}
              <img className={styles.svg} src="/images/mastercard.svg" alt="" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="flex">
              {isCreate ? (
                <div>
                  <Button
                    clickHandler={() => setIsCreate(false)}
                    buttonText={"Create"}
                    type={"purple"}
                  />
                  <Button
                    clickHandler={() => setIsCreate(false)}
                    buttonText={"Cancel"}
                  />
                </div>
              ) : (
                <>
                  <p className={styles.number}>{User.card.number}</p>
                  <p
                    onClick={() => setCvvShow(!cvvShow)}
                    className={styles.cvv}
                  >
                    {cvvShow === true ? "cvv" : User.card.cvv}
                  </p>
                </>
              )}
            </div>
          </div>
        )}
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
            type={"purple"}
            width={50}
            height={50}
            clickHandler={() => {
              setDeleteShow(false);
              setAddShow(true);
            }}
          >
            <AiOutlinePlus size={17} fill="#fff" />
          </Button>
          <Button
            buttonText={"Remove"}
            type={"error"}
            width={50}
            height={50}
            position={"right"}
            clickHandler={() => {
              setAddShow(false);
              setDeleteShow(true);
            }}
          >
            <AiOutlineMinus size={17} fill="#ed513e" />
          </Button>
          <Alert text={"Card have been add successfully!"} />
        </div>
      </div>
    </>
  );
};

export default Card;
