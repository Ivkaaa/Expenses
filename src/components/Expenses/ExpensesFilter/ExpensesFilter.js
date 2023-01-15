import React from "react";

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterYear = (event) => {
        props.onChangeFilterYear(event.target.value)
        // console.log(event)

    }


    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Odaberi godinu:</label>
                <select value={props.selected} onChange={filterYear}>
                    <option value='2022'>2023</option>
                    <option value='2021'>2022</option>
                    <option value='2020'>2021</option>
                    <option value='2019'>2020</option>
                </select>
            </div>

        </div>
    )
}

export default ExpensesFilter;