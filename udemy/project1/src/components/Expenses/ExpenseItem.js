import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
    let { title, date, amount } = expense;

    function changeTitleClickHandler() {
        console.log("Clicked!");
        title = "Updated!";
        console.log(title); // Updated! but... it doesn't reflected to our page... cuz our ExpenseItem() funtion doesn't called again!
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} /> {/** ExpenseDate() function called! */}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={changeTitleClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
