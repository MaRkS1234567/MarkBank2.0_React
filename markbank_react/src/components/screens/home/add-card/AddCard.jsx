import { useForm } from "react-hook-form";
import Button from "../../../ui/button/Button";
import Field from "../../../ui/field/Field";
import Titles from "../../../ui/title/Title";
import styles from "./AddCard.module.scss";
import CreditCard from "./credit-card/CreditCard";
import { useState } from "react";
import Alert from "../../../ui/alert/Alert";

const AddCard = ({ isAdd, setIsAdd }) => {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [cvvValue, setCvvValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  return (
    <>
      <div className={styles.cards_top}>
        <Titles>Add Card</Titles>
      </div>
      <div className={styles.cards_middle}>
        <div className={styles.fignya}></div>
        <div className={styles.card}>
          <div className={styles.full_name}>
            {nameValue === "" ? "**** ****" : nameValue}
            <img className={styles.svg} src="/images/mastercard.svg" alt="" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex">
            <p className={styles.number}>
              {numberValue === ""
                ? "**** **** **** ****"
                : numberValue.match(/.{1,4}/g).join(" ")}
            </p>
            <p onClick={() => setCvvShow(!cvvShow)} className={styles.cvv}>
              {cvvValue === "" ? "***" : cvvValue}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cards_bottom}>
        <Field
          type="name"
          name="name"
          register={register}
          options={{
            ...register("name", {
              required: "Name is required",
            }),
          }}
          placeholder="Enter Owner Name"
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
        <Field
          type="number"
          name="number"
          register={register}
          options={{
            ...register("number", {
              required: "Number is required",
            }),
          }}
          placeholder="Enter Card Number"
          value={numberValue}
          onChange={(e) => {
            setNumberValue(e.target.value);
          }}
        />
        <Field
          type="number"
          name="cvv"
          register={register}
          options={{
            ...register("cvv", {
              required: "CVV is required",
            }),
          }}
          placeholder="Enter CVV Code"
          value={cvvValue}
          onChange={(e) => {
            setCvvValue(e.target.value);
          }}
        />
        <div className={styles.checkbox} id="main">
          <label class="checkbox style-e">
            <label id="mainLabel" for="mainCard">
              Assign Main Card
            </label>
            <input type="checkbox" id="mainCard" name="mainCard" />
            <div class="checkbox__checkmark"></div>
          </label>
        </div>
        <div className={styles.buttons}>
          <Button
            buttonText={"Add Card"}
            type={"purple"}
            width={50}
            height={50}
            clickHandler={() => setIsAdd(false)}
          />
          <Button
            buttonText={"Cancel"}
            type={"common"}
            width={50}
            height={50}
            position={"right"}
            clickHandler={() => setIsAdd(false)}
          />
        </div>
      </div>
    </>
  );
};

export default AddCard;
