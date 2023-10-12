import Titles from "../../../ui/title/Title";
import styles from "./Amount.module.scss";
import { User } from "../../../../models/User.model.js";
import CurrencyFormat from "react-currency-format";
import Button from "../../../ui/button/Button";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Amount = () => {
  return (
    <div className={styles.amount}>
      <Titles>Total balance</Titles>
      <div className="flex white">
        <CurrencyFormat
          className={styles.balance}
          value={User.total_balance}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={true}
        />
        <p className={styles.zero}>.00</p>
        <p className={styles.currency}>{User.current_currency}</p>
      </div>
      <div
        className="flex white"
        style={{
          paddingLeft: "30px",
          paddingRight: "20px",
          paddingTop: "10px",
        }}
      >
        <Button buttonText={"Send"} type={"purple"} width={33} height={50}>
          <BsArrowUp size={17} fill="#fff" />
        </Button>
        <Button buttonText={"Request"} type={"common"} width={33} height={50}>
          <BsArrowDown size={17} fill="#000" />
        </Button>
        <Button buttonText={"Top Up"} type={"common"} width={33} height={50}>
          <AiOutlinePlus size={17} fill="#000" />
        </Button>
      </div>
    </div>
  );
};

export default Amount;
