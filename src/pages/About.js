import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Us</h2>
      <p>We are a leading accounting firm dedicated to providing top-notch financial services to our clients.</p>
      <p>Our team of experts is committed to helping you achieve your financial goals.</p>
    </AboutSection>
  );
};

export default About;
