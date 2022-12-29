import React from 'react'
import style from '../Assets/style.module.css';
import Products from './Products.js';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import ProductDetail from "./ProductDetail.js";
function Main() {
  return (
    <main id={style.main}>
      <Switch>
        <Route path='/products/:id' component={ProductDetail} />
        <Route path='/products' component={() => <Products typeOCloth={`all`} />} />
        <Route path='/mens_clothing' component={() => <Products typeOCloth={`men's clothing`} />} />
        <Route path='/jewelery' component={() => <Products typeOCloth={`jewelery`} />} />
        <Route path='/womens_clothing' component={() => <Products typeOCloth={`women's clothing`} />} />
        <Route path='/' component={() => <Products typeOCloth={`all`} />} />
      </Switch>
    </main>
  )
}

export default Main;