import React from 'react';

import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.css'

const ExpenseItem = props => {
    // const expenseDate = new Date(2023,1,5);
    // const expenseTitle = 'Car insurance';
    // const expensePrice = 294.67;
    // console.log(typeof expenseDate)

    return (
        // da bi ovaj wrapper od componente Card radio na ovaj nacin, potrebno je da u componentu Card prosledimo props.children sto znaci sve propseve koji se nalaze unutar <Card className='expense-item'></Card>
        <li className='expenses-list__item'>
            <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2 className='expense-item__title'>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} RSD</div>
            </div>
        </Card>
        </li>
    );

};

export default ExpenseItem;