import React from 'react';

import "./ExpenseDate.css"

function ExpenseDate(props) {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const year = props.date.getFullYear();
    console.log(day)

    return (
        <div className="expense-date">
            <div className="expense-date-month">{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date-year'>{year}</div>
        </div>
    )
};

export default ExpenseDate;