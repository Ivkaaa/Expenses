import React from "react";

import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {
    const savedExpensesData = (enteredExpensesData) => {
        const expenseData = {
            ...enteredExpensesData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddNewExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm 
            onSavedExpensesDataFromInputs={savedExpensesData}
            />
        </div>
    )

};

export default NewExpense;