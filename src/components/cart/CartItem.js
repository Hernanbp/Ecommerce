import { useDispatch } from "react-redux"
import { toast, ToastContainer } from "react-toastify"
import { removeFromCart } from "../../features/cart/cartSlice"

const CartItem = ({ title, price, id, image }) => {

    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(removeFromCart({ id }));
        toast.success('Removed from cart', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
            <div className="item-cart">
                <img src={image} alt="" />
                <p>{title}</p>
                <p>${price}</p>
                <div className="actions-cart">
                    <button onClick={removeItem}>Remove from cart</button>
                    <button onClick={removeItem}>Save for later</button>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
            />
        </>
    )
}

export default CartItem
