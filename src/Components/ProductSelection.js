import React from 'react'
import Main from './Main.js'
import Side from './Side.js'
import style from '../Assets/style.module.css';
export default function ProductSelection() {
    return (
       
            <div id={style.wrapper}>
                <Side />
                <Main />
            </div>
     
    )
}
