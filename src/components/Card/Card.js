import React from 'react';

import './Card.css';

function Card (props){
    //na ovaj nacin smo dodali klasu 'expense-item' i njne style iz komponente ExpenseItem;
    const classes = 'card ' + props.className;

    return(
        <div className={classes}>{props.children}</div>
    )
};

export default Card;