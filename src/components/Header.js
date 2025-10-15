import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
