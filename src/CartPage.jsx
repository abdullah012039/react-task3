import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CartCheck from './CartCheck.jsx'
import style from './cart-style.module.css'

const cartPage = () => {
    return (
        <div className={style.page}>
            <CartCheck
            ProductName="Advanced JavaScript"
            Price="100"
            maxNumber="5"
            />
            <CartCheck
            ProductName="React Development"
            Price="200"
            maxNumber="5"
            />
            <CartCheck
            ProductName="Vue 3"
            Price="300"
            maxNumber="5"
            />
        </div>
        
    )
    }
    export default cartPage