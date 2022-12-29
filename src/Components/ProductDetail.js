import React, { useContext } from 'react'
import { contextProvider } from './ProductContextProvider';
import style from '../Assets/style.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function ProductDetail(props) {
    const data = useContext(contextProvider);
    const productId = props.match.params.id;
    const currentProduct = data[productId - 1];
    return (
        <div>
            {
                <>
                    <img width={"200px"} src={currentProduct.image} alt='product_details'/><br/><br/><br/>
                    <h3 key={currentProduct.id}>{currentProduct.title}</h3>
                    <p>{currentProduct.description}</p><hr/>
                    <div id={style.link_wrapper}><Link to='/products' id={style.back_to_products}>beck to products</Link></div>
                </>
            }
        </div>
    )
}

export default ProductDetail;
