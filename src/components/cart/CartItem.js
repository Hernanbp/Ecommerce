import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../features/cart/cartSlice"

const CartItem = ({ title, price, id, image, quantity }) => {

    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(removeFromCart({ id }));
        toast.success('Removed from cart', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    const increaseItem = () => {
        dispatch(increaseQuantity({ id }));
    }

    const decreaseItem = () => {
        dispatch(decreaseQuantity({ id, quantity: -1 }));
    }

    return (
        <>
            <div className="item-cart">
                <img src={image} alt="" />
                <p>{title}</p>
                <p>${(price * quantity).toFixed(2)}</p>
                <div className="quantity">
                    {quantity <= 1 ? <button disabled onClick={decreaseItem}>-</button> :
                        <button onClick={decreaseItem}>-</button>}
                    <p>{quantity}</p>
                    <button onClick={increaseItem}>+</button>
                </div>
                <div className="actions-cart">
                    <button onClick={removeItem}>Remove from cart</button>
                </div>
            </div>
        </>
    )
}

export default CartItem
