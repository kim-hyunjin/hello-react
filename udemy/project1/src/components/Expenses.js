import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
    return (
        <div className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem expense={expense}></ExpenseItem>
            ))}
        </div>
    );
}

export default Expenses;
