import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import style from '../Assets/style.module.css';
import { CartContext } from './CartContextProvider';
import { actions, shorten } from './helpers';
function Basket() {
    const { state, dispatch } = useContext(CartContext);
    const [isClear, setIsClear] = useState("");
    return (
        <div id={style.checkOutBodyWrapper}>
            <div id={style.checkOutMain}>

                <div>{state.selectedItem.length < 1 ? <p style={{ textAlign: 'center', margin: '50px' }}>The shopping cart is empty</p> : state.selectedItem.map(item =>
                    <div key={item.id} id={style.listOfProduct}>
                        <div>{shorten(item.title)}</div>
                        <div>{item.price}</div>
                        <div>{item.qty}</div>
                        <img width="45px" src={item.image} alt='product_image' />
                        <div id={style.basketButtons}>
                            <button onClick={() => actions("removeItem", item, dispatch)}>remove</button>
                            <button onClick={() => actions("decrease", item, dispatch)}>-</button>
                            <button onClick={() => actions("increase", item, dispatch)}>+</button>
                        </div>
                    </div>
                )}</div>
            </div>
            <div id={style.checkOutSide}>
                <ul id={style.basketDetails}>
                    <li>{state.selectedItem.length > 0 && `Count :`}{state.selectedItem.length > 0 && state.selectedItem.reduce((acc, cur) => acc + cur.qty, 0)}</li>
                    <li>{state.selectedItem.length > 0 && `Total:`}
                        {state.selectedItem.length > 0 && state.selectedItem.reduce((acc, cur) => acc + cur.qty * cur.price, 0).toFixed(2)}
                        {state.selectedItem.length > 0 ? `$` : `the shopping cart is empty!`}</li>
                    <li>{state.selectedItem.length > 0 && <button id={style.clearBasket} onClick={() => actions("clear", "", dispatch) === "clear" && setIsClear("clear")}>Clear</button>}</li>
                    {isClear && <Redirect to={'/'} />}
                </ul>
            </div>
        </div>
    )
}

export default Basket;