import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import './cart.css'

export const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <div className="cart">
            <div className="items">
                <h3>Shopping Cart</h3>
                <span>$250</span>
                {cartItems?.map(({ title, price, id, image }) =>
                    <CartItem key={id} id={id} title={title} price={price} image={image} />
                )}
            </div>
        </div>
    )
}
