import React, { useReducer, createContext } from 'react';
export const CartContext = createContext();
const initialValues = {
    selectedItem: [],
    count: 0,
    total: 0,
    isCheckOutLink:false,
    checkOut: false
}
function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialValues);
    function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_ITEM":
               
                if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                    state.selectedItem.push({
                        ...action.payload,
                        qty: 1
                    })
                }
                return {
                    ...state,
                    selectedItem: [...state.selectedItem],
                }
            case "REMOVE_ITEM":
                const newItems = state.selectedItem.filter(item => item.id !== action.payload.id)
                return { ...state, selectedItem: [...newItems] }

            case "INCREASE":
                const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
                state.selectedItem[indexI].qty++;
                return {
                    ...state
                }
            case "DECREASE":
                const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
                state.selectedItem[indexD].qty>1 && state.selectedItem[indexD].qty--;
                
                return {
                    ...state
                }
            case "CHECKOUT":
                return {
                    selectedItem: [],
                    count: 0,
                    total: 0,
                    checkOut: true
                }
            case "CLEAR":
                return {
                    selectedItem: [],
                    count: 0,
                    total: 0,
                    checkOut: false
                }

        }
    }
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;