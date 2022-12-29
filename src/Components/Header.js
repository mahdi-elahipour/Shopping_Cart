import React,{useContext} from 'react';
import style from '../Assets/style.module.css';
import { CartContext } from './CartContextProvider';
import {Link} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import logo from '../Assets/images/logo/green-shop-store.jpg';

function Header(){
const {state}=useContext(CartContext);
    return(
        <div>
            <nav className={style.nav}>
                <div id={style.logoContainer}>
                <img width={'50px'} src={logo} alt='logo'/>
                <h1>Green Shop</h1>
                </div>
                <ul>
                    <li>{state.selectedItem.length!==0 && <Link to={'/checkout'}><FaShoppingCart id={style.shoping_cart_icon}/></Link>}</li>
                    <li><Link to={'/products'}>Products</Link></li>
                    <li>contact us</li>
                    <li>about us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;