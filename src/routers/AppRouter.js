import { Route, Routes } from 'react-router'
import App from '../App'
import CartPage from '../CartPage'


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<App replace to="/" />} />
        </Routes>
    )
}
