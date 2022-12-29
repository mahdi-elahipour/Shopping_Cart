import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import ProductContextProvider from './Components/ProductContextProvider';
import CartContextProvider from './Components/CartContextProvider';
import { BrowserRouter } from 'react-router-dom';


const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <ProductContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </ProductContextProvider>
    </BrowserRouter>


)



