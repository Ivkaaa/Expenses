import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // useState('') - kada se prvi put renderuje, input je prazan pa zato ide '' 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // pozivamo jedan useState umesto 3 sto podrazumeva da se azuriraju sva 3 input odjednom, a ne svaki zasebno kao kada smo pozivali 3x
    // const [input, setInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setInput({
        //     ...input,
        //     enteredTitle: event.target.value,
        // }) sa pozivom useState object - ovo u nekim situacijama nece raditi zato  bolje napsati ovako i ovaj nacin korisitmokad anam jedan kad anam svaki state zavisi od prethodnog:
        // setInput((prevState) => {
        //     return{...prevState, enteredTitle: event.target.value}
        // })
        // console.log(setEnteredTitle)
    };

    const changeAmountHandler = (event) => {
        setEnteredAmount(event.target.value)

        // setInput((prevState) => {
        //     return{...prevState, enteredAmount: event.target.value}
        // });
    };

    const changeDateHandler = (event) => { 
        setEnteredDate(event.target.value);

        // setInput((prevState) => {
        //     return{...prevState, enteredDate: event.target.value}
        // }); - za poziv 1 usestate koji je objekat
    };

    const submitHandler = (event) => {
        event.preventDefault() // ovako sprecavamo ucitavanje stranice nakon stiskanja dugmeta submit, kao i automatsko slanje podataka na sever

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSavedExpensesDataFromInputs(expenseData);

        // nakon sto se uradi submit forme inpute praznimo tako sto setujemo state na '' koristeci princip two-way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
        // console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Naziv</label>
                    <input type='text' 
                    value={enteredTitle} 
                    onChange={changeTitleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Cena</label>
                    <input type='number' min='0.01' step='0.01' 
                    value={enteredAmount} 
                    onChange={changeAmountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Datum</label>
                    <input type='date' min='2019-01-01' max='2024-01-01' 
                    value={enteredDate} 
                    onChange={changeDateHandler}/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Dodaj trošak</button>
            </div>
        </form>
    )
};

export default ExpenseForm;