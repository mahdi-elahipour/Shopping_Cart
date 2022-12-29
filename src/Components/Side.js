import React from 'react'
import { Link } from 'react-router-dom';
import style from '../Assets/style.module.css';

function Side() {
  return (
    <aside id={style.side_bar}>
      <ul>
        <li>👕<Link to={'/mens_clothing'}>Mens Clothing</Link></li>
        <li>💍<Link to={'/jewelery'}>jewelery</Link></li>
        <li>👘<Link to={'/womens_clothing'}>Womens Clothing</Link></li>
      </ul>
    </aside>
  )
}

export default Side;
