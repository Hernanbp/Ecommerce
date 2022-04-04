import { Header } from "./components/header/Header"
import { Cart } from "./components/cart/Cart"
import { store } from "./app/store"
import { Provider } from "react-redux"
import { Link } from "react-router-dom"
import './App.css'

const CartPage = () => {
    return (
        <Provider store={store}>
            <div className="super-wrapper">
                <Header />
                <div className="wrapper">
                    <Cart />
                    <Link to="/">
                        <button className="continueshopping">Continue Shopping</button>
                    </Link>
                </div>
            </div>
        </Provider>
    )
}

export default CartPage
