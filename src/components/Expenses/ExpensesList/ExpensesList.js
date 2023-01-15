import React from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

import './ExpensesList.css';


const ExpensesList = (props) => {
    if(props.items.length === 0){
        /*nema troskova u god =poruka, ima troskova =dinamicki se renderuju podaci */
        return (<p className='expenses-message'>No expenses found.</p>)
    }

    return (
        <ul className="expenses-list">
            {props.items.map(expenseItem => 
                <ExpenseItem 
                    key={expenseItem.id}
                    title={expenseItem.title}
                    amount={expenseItem.amount}
                    date={expenseItem.date} 
                />)
            }
        </ul>
    )
};

export default ExpensesList;