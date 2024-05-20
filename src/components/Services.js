import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ServiceCard = styled.div`
  flex: 0 1 30%;
  margin: 1rem 0;
  padding: 2rem;
  background: #f4f4f4;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Services = () => (
  <ServicesSection>
    <h2>Our Services</h2>
    <ServicesContainer>
      <ServiceCard>
        <h3>Tax Preparation</h3>
        <p>Expert tax preparation services for individuals and businesses.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>Bookkeeping</h3>
        <p>Accurate and timely bookkeeping services to keep your finances in order.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>Consulting</h3>
        <p>Professional consulting to help you grow and manage your business.</p>
      </ServiceCard>
    </ServicesContainer>
  </ServicesSection>
);

export default Services;
