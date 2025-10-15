import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <h1 className="company-name">Muse</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>

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
