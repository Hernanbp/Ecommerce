import './header.css';
import { Count } from '../count/Count';
import { useState } from 'react';
import { MdOutlineShoppingCart, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Header = () => {

    const [val, setVal] = useState('');

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    return (
        <header>
            <div className="header-wrapper">
                <h1>herno<span>commerce</span></h1>
                <div className="search">
                    <input onChange={handleChange} value={val} type="text" placeholder='Search' />
                    <MdSearch className='search-ico' />
                </div>
                <nav>
                    <ul>
                        <li>Account</li>
                        <li>Orders</li>
                        <li>Favourites</li>
                    </ul>
                </nav>
                <Link to='/cart' >
                    <div className="basket">
                        <Count />
                        <MdOutlineShoppingCart style={{ transform: "scale(1.2)" }} />
                    </div>
                </Link>
            </div>
        </header>
    )
}
