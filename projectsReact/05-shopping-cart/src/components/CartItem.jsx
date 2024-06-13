
export function CartItem({ thumbnail, title, price, quantity, addToCart, removeOneFromCart}) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>➕</button>
                <button onClick={removeOneFromCart}>➖</button>
            </footer>
        </li>
    )
}