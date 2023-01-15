import React, {useState} from 'react';

// import Card, ExpenseItem
import Card from '../../UI/Card/Card';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

import './Expenses.css';

const Expenses = props => {
  const data = props.expense;
  const [year, setYear] = useState('2023');

  const changeFilterYear = (selectedYear) => {
    setYear(selectedYear)
  };

  const filteredExpense = data.filter(element => {
    return element.date.getFullYear().toString() === year
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilterYear={changeFilterYear} />
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
};

export default Expenses;



/* renderovanje hard code podataka iz App.js
  <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date}/>*/