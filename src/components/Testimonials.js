import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
`;

const TestimonialCard = styled(motion.div)`
  background: #fff;
  padding: 2rem;
  margin: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Testimonials = () => {
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <TestimonialsSection>
      <h2>What Our Clients Say</h2>
      <TestimonialsContainer>
        <TestimonialCard
          initial="hidden"
          animate="visible"
          variants={testimonialVariants}
          transition={{ duration: 0.5 }}
        >
          <p>"The team at the Accounting Firm is exceptional. They helped me save a lot on taxes!"</p>
          <p>- John Doe</p>
        </TestimonialCard>
        <TestimonialCard
          initial="hidden"
          animate="visible"
          variants={testimonialVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>"Their bookkeeping services are top-notch. Highly recommend!"</p>
          <p>- Jane Smith</p>
        </TestimonialCard>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
