import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background: #333;
  color: white;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Accounting Firm. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
