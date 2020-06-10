import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem, StyledHeader } from '../styles/components';
import spacexLogo from '../images/spacex.svg';

const Header = () => (
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
            <span role="img" aria-label="emoji">
              🛒
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
