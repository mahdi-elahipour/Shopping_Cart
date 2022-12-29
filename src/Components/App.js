import { React } from "react";
import Header from './Header.js';
import { Switch,Route } from "react-router-dom/cjs/react-router-dom.min.js";
import ProductSelection from './ProductSelection.js'
import Basket from './Basket';
import '../Assets/font.css';


const App = () => {
    return (
        <>

            <Header />
            <Switch>
                <Route path='/checkout' component={Basket}/>
                <Route path='/' component={ProductSelection}/>
            </Switch>
                
        </>
    )
}

export default App;
