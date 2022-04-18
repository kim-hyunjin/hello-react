import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useMemo, useState } from 'react';

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState('2022');

  const filterChangeHandler = (selected) => {
    console.log(selected);
    setSelectedYear(selected);
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
  }, [expenses, selectedYear]);

  const expenseContent = useMemo(() => {
    if (filteredExpenses.length === 0) {
      return <p>No expenses found.</p>;
    }
    return filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
    ));
  }, [filteredExpenses]);

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
