import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem expense={expense}></ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;
