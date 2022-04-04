import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import { getCartItems, getTotalPrice } from "../../features/cart/cartSlice"
import CartItem from "./CartItem"
import './cart.css'
import { Link } from "react-router-dom"

export const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div className="cart">
            <div className="items">
                <h3>Shopping Cart</h3>
                {cartItems?.map(({ title, price, id, image, quantity }) =>
                    <CartItem key={id} id={id} title={title} price={price} image={image} quantity={quantity} />
                )}
                <div className="total">
                    <p>Total without shipment:</p>
                    <span>${(totalPrice).toFixed(2)}</span>
                </div>
                <button className="continueshopping">
                    <Link to="/">
                        <p className="contshop-link">Continue Shopping</p>
                    </Link>
                </button>
            </div>
            <ToastContainer
                position="bottom-right" />
        </div>
    )
}
