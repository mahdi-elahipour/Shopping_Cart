import React, { useContext } from 'react'
import style from '../Assets/style.module.css';
import { cartQTY, isInCart, shorten } from './helpers';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContextProvider';
import { actions } from './helpers.js';
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineStarRate } from "react-icons/md";

export default function Product({ data}) {
    const { state, dispatch } = useContext(CartContext);

    return (
        <div id={style.product}>

            {
                <div id={style.productBody}>
                    <div>
                        <div id={style.productImageWrapper}>
                            <img id={style.product_image} src={data.image} alt='product_image' />
                        </div>
                        <div id={style.productTextWrapper}>
                        <h3 key={data.id}>{shorten(data.title)}</h3>
                        <p>{shorten(data.description, 6)}</p>
                        <p>{data.price}$</p>
                        </div>
                        <span style={{position:'absolute',right:0,top:-8,display:'flex',alignItems:'center'}}><MdOutlineStarRate/>{data.rating.rate}</span>
                    </div>

                    <div id={style.buttons}>
                        <Link to={`/products/${data.id}`}><CgDetailsMore id={style.details} /></Link>

                        <div id={style.actions}>
                            {cartQTY(state, data.id) === 1 &&
                                <button onClick={() => actions("removeItem", data, dispatch)}>Remove</button>

                            }
                            {
                                cartQTY(state, data.id) > 1 &&
                                <button onClick={() => actions("decrease", data, dispatch)}>-</button>


                            }
                            {
                                isInCart(state, data.id) && <span>{state.selectedItem.filter(item => item.id === data.id).map(item => item.qty)}</span>
                            }
                            {
                                !isInCart(state, data.id) ? <button id={style.buttonEffect} onClick={() => actions("addItem", data, dispatch)}>add item</button> :
                                    <button onClick={() => actions("increase", data, dispatch)}>+</button>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
