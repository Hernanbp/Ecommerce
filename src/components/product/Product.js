import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice";
import { MdAddShoppingCart } from 'react-icons/md'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Product = ({ title, price, category, image }) => {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart({ title, price, category, image }));
        toast.success('Added to cart', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='product'>

            <div className="p-top">
                <img className="product-image" src={image} alt="img" />
            </div>
            <div className="p-bottom">
                <h4>{title.substring(0, 50)}</h4>
                <p>{category}</p>
                <p>${price}</p>
                <button onClick={handleAdd}>
                    Add to cart
                    <MdAddShoppingCart style={{ transform: "scale(1.2)", color: "grey" }} />
                </button>
            </div>
        </div>
    )
}
