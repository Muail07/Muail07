import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: white;
  &:hover {
    color: #ccc;
  }
`;

const Header = () => (
  <Nav>
    <h1>Accounting Firm</h1>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  </Nav>
);

export default Header;
