import React, { useContext } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MenuItem, StyledHeader } from '../styles/components';
import spacexLogo from '../images/spacex.svg';
import { CartContext } from '../context';

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <StyledHeader>
      <Link to="/">
        <img src={spacexLogo} alt="logo SwapShop" />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Products</Link>
          </MenuItem>
          <MenuItem margin>
            <Link to="/">Products</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cart" />
              </span>
              {cart.length}
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
