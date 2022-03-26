import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState('2022');

  const filterChangeHandler = (selected) => {
    console.log(selected);
    setSelectedYear(selected);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
