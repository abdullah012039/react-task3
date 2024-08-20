import React, { useState } from 'react';
import style from './Cart-style.module.css';
const CartCheck = ({ProductName , Price , maxNumber}) => {
    const [counter, setCounter] = useState(0);
    
    const [total, setTotal] = useState(0);
    return (
        <div className={style.cart}>
            <h1>CartCheck</h1>
            <div className={style.header}><span >{ ProductName }</span>|<span>{ Price }</span></div>
            <div className={style.counterbtn}>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <span className={style.span1}>{counter}</span>
                <button onClick={() => setCounter(maxNumber && counter + 1)}>+</button>
            </div>
            <button onClick={() =>  setTotal(Price * counter)}>check</button>
            <div id="total">{ total == 0 ? null : total }</div>
        </div>
    );
}
export default CartCheck;