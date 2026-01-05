import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import Grocery from './Grocery';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  // if no dependency array is provided, useEffect will be called after every render
  // if dependency array is empty, useEffect will be called only once after initial render
  // if dependency array has variables, useEffect will be called only when those variables change + initial render

  const data = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg sticky top-0 z-50 h-50 bg-linear-to-bl from-teak-500 to-teal-300">
      <div>
        <Link to="/">
          <img className="w-40 ml-10 mt-5" src={LOGO_URL} />
          <h1 className="ml-22 mt-1 text-2xl font-bold absolute top-35">
            Muse
          </h1>
        </Link>
      </div>
      <div>
        <ul className="flex items-center mt-15 space-x-10 mr-10">
          <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              About Us
            </Link>
          </li>
          <li>
            {/* Link is a component from react-router-dom and the difference between <a> and <Link> is that <a> refreshes the whoel page nd Link does not reloads the whole page */}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" style={{ textDecoration: 'none' }}>
              {' '}
              Grocery{' '}
            </Link>
          </li>
          <Link to="/cart">
            <div className="flex cursor-pointer">
              <img
                className="w-8 h-8 ml-4"
                src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
              />
              {cartItems.length === 0 ? (
                <></>
              ) : (
                <div className="h-6 w-6 bg-amber-200 rounded-4xl text-center absolute top-12 right-57 shadow-2xl hover:bg-amber-400">
                  <div className="mb-1">{cartItems.length}</div>
                </div>
              )}
            </div>
          </Link>
          <Link to={btnName === 'Login' ? '/login' : '/'}>
            <button
              onClick={() =>
                setBtnName(btnName === 'Login' ? 'Logout' : 'Login')
              }
            >
              {btnName}
            </button>
          </Link>

          <li className="font-bold mt-1">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
