import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import CardBG from "../UI/CardBG";

function ExpenseItem(props) {
  return (
    <CardBG>
      <div className="MainDiv">
        <ExpenseDate date={props.date} />
        <h2 className="Product">{props.title}</h2>
        <div className="Price">${props.amount}</div>
      </div>
    </CardBG>
  );
}
export default ExpenseItem;
