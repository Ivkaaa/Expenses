import React from 'react';

import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.css'

function ExpenseItem(props) {
    // const expenseDate = new Date(2023,1,5);
    // const expenseTitle = 'Car insurance';
    // const expensePrice = 294.67;
    // console.log(typeof expenseDate)


    return (
        // da bi ovaj wrapper od componente Card radio na ovaj nacin, potrebno je da u componentu Card prosledimo props.children sto znaci sve propseve koji se nalaze unutar <Card className='expense-item'></Card>
        <Card className='expense-item'>
            {/* <div>{props.date.toDateString()}</div> mozemo koristiti ovu liniju koda s tim sto datum ima i dan u nedelji ili da dodamo komponentu za datum*/}
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );

};

export default ExpenseItem;