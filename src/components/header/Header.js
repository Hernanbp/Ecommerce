import { Count } from '../count/Count';
import { useState } from 'react';
import { MdOutlineShoppingCart, MdSearch, MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {

    const [val, setVal] = useState('');

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    return (
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <svg width="39" height="36" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="18.1855" y="36.7036" width="29.4123" height="8.99589" fill="#FFA02D" />
                        <circle cx="18.1853" cy="27.7278" r="17.9715" fill="#FFA02D" />
                        <circle cx="46.0872" cy="22.9998" r="22.6995" fill="black" />
                    </svg>
                    <h3>Cloud<span>mmerce</span></h3>
                </div>
                <div className="search">
                    <input onChange={handleChange} value={val} type="text" placeholder='Search' />
                    {val === '' ? <MdSearch className='search-ico' /> :
                        <MdOutlineClose className='cross-ico' onClick={() => setVal('')} />}
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
