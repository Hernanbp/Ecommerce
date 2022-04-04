import { useSelector } from 'react-redux'

export const Count = () => {

    const count = useSelector(state => state.cart.cartItems.length)

    return (
        <div>
            <div className="box">
                <p className='count'>{count}</p>
            </div>
        </div>
    )
}
