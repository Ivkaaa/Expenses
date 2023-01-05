import React from 'react';

import Expenses from './components/Expenses/Expenses'


function App() {
  const expenses = [
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
      date: new Date(2023,0,2)
    },
    {
      id: 'e3', 
      title:'TV', 
      amount:300, 
      date: new Date(2023,0,1)
    },
    {
      id: 'e4', 
      title:'Dog', 
      amount:150, 
      date: new Date(2023,0,3)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <Expenses expense={expenses}/>
    </div>

  );
}

export default App;
