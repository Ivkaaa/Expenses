import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

const hardCodeData = [
  {
    id: 'e1', 
    title:'Toilet paper', 
    amount:4.67, 
    date: new Date(2023,0,5)
  },
  {
    id: 'e2', 
    title:'Car insurance', 
    amount:294.67, 
    date: new Date(2022,0,2)
  },
  {
    id: 'e3',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(hardCodeData);

  const addNewExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
     // console.log(expense);
  };
  

  return (
    <div className='container'>
      <NewExpense onAddNewExpense={addNewExpense} />
      <Expenses expense={expenses}/>
    </div>

  );
}

export default App;
