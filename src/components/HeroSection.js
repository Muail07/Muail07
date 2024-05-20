import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const Hero = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/path-to-image.jpg') no-repeat center center/cover;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  opacity: 0;
`;

const HeroButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: none;
  background: #ff6200;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background: #e55b00;
  }
`;

const HeroSection = () => {
  useEffect(() => {
    gsap.to('.hero-content', { opacity: 1, duration: 2 });
  }, []);

  return (
    <Hero>
      <HeroContent className="hero-content">
        <h1>Welcome to Our Accounting Firm</h1>
        <p>Your success is our business.</p>
        <HeroButton>Learn More</HeroButton>
      </HeroContent>
    </Hero>
  );
};

export default HeroSection;
