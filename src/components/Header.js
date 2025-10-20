import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  // if no dependency array is provided, useEffect will be called after every render
  // if dependency array is empty, useEffect will be called only once after initial render
  // if dependency array has variables, useEffect will be called only when those variables change + initial render
  useEffect(() => {
    console.log('useEffect called');
  }, [btnName]);

  return (
    <div className="header">
      <div>
        <Link
          to="/"
          className="logo-container"
          style={{ textDecoration: 'none' }}
        >
          <img className="logo" src={LOGO_URL} />
          <h1 className="company-name">Muse</h1>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
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
          <img
            className="cart-logo"
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
          />
          <button
            className="login-btn"
            onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
