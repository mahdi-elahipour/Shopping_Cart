import React, { useContext, useEffect, useState } from 'react'
import style from '../Assets/style.module.css';
import Product from './Product.js';
import { contextProvider } from './ProductContextProvider';
import loading from '../Assets/images/Loading.gif';

export default function Products({ typeOCloth }) {
  const [data, setData] = useState();
  const allData = useContext(contextProvider);

  useEffect(() => {
    function filterProduct() {
      setData(allData && allData.length !== "" && allData.filter(item => item.category === typeOCloth));
    }
    filterProduct();
  },[]);
  return (
    <div id={style.productContainer}>
      {
        typeOCloth === "all" && allData && allData.length !== "" ? allData.map(product => <Product key={product.id} data={product} />) : data && data.length !== "" && data.map(item => <Product key={item.id} data={item} />)
      }
      {
      allData && allData.length===0 &&  <div id={style.loading_container}><img src={loading} alt='loading'/></div>
      }
    </div>

  )
}
