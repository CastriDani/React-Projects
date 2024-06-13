import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartContext";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const { state, addToCart, removeOneFromCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ 
        cart: state, 
        addToCart,
        removeOneFromCart,
        removeFromCart, 
        clearCart 
    }}>
        
      {children}
    </CartContext.Provider>
  );
}