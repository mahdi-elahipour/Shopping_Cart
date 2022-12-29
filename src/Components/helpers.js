import axios from "axios"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const fetchData=async function(){

    const allData=await axios.get('https://fakestoreapi.com/products');
    return allData.data;
}

export const shorten=(text,words=2)=>{
    let s="";
    const splittedText=text.split(" ");
    for(let i=0;i<words;i++){
        s=s+ ` ${splittedText[i]}`;
    }
    return s;

}

export const isInCart=function(state,id){
    const findItem=!!state.selectedItem.find(item=>item.id===id);
    return findItem;

}

export const cartQTY=function(state,id){
    const findItem=state.selectedItem.findIndex(item=>item.id===id);
    if(findItem===-1){
        return false;
    }else
    {
        return state.selectedItem[findItem].qty;
    }

}

export function actions(type,data="",dispatch) {
    switch (type) {
        case "removeItem":
            dispatch({ type: "REMOVE_ITEM", payload: data });
            break;
        case "addItem":
            dispatch({ type: "ADD_ITEM", payload: data });
            break;
        case "increase":
            dispatch({ type: "INCREASE", payload: data });
            break;
        case "decrease":
            dispatch({ type: "DECREASE", payload: data });
            break;
            case "clear":
                dispatch({type:"CLEAR",payload:data});
                return "clear";
    }
}
