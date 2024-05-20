import React from 'react';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactForm />
    </ContactSection>
  );
};

export default Contact;
