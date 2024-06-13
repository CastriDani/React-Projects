import { useReducer } from "react";
import { CartReducer, CartInitialState } from "../reducers/cart";

export function useCartReducer () {
    const [state, dispatch] = useReducer(CartReducer, CartInitialState)
  
    const addToCart = product => dispatch({ 
      type: 'ADD_TO_CART', 
      payload: product 
    })
  
    const removeOneFromCart = product => dispatch({
      type: 'REMOVE_ONE_FROM_CART',
      payload: product
    })
  
    const removeFromCart = product => dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  
    const clearCart = () => dispatch({ 
      type: 'CLEAR_CART' 
    })
  
    return { state, addToCart, removeOneFromCart, removeFromCart, clearCart }
  }
  