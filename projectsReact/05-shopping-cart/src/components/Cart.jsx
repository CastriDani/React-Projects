import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem.jsx";


export function Cart() {
    const carCheckboxId = useId();
    const { cart, clearCart, addToCart, removeOneFromCart } = useCart();

    return (

        <>
            <label className="cart-button" htmlFor={carCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={carCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    {cart.map((product) => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            removeOneFromCart={() => removeOneFromCart(product)}
                            {...product}
                        
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>

            </aside>
        </>

    )


}