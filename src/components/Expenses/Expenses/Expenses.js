import React, {useState} from 'react';

// import Card, ExpenseItem
import Card from '../../UI/Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

import './Expenses.css';

const Expenses = props => {
  const [year, setYear] = useState('2023');

  const changeFilterYear = (selectedYear) => {
    setYear(selectedYear)
  };
  let data = props.expense;

  return (
    <Card className="expenses">
        <ExpensesFilter 
          selected={year}
          onChangeFilterYear={changeFilterYear}
        />

        {/* ovako se dinamicki renderuju podaci iz App.js */}
        {data.map(expenseItem => 
          <ExpenseItem 
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date} 
          />)}
        {/* ovako se renderuju zakucani podaci koje imamo u Data u App.js 
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        */}
    </Card>
  );
}

export default Expenses;