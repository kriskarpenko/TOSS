import React from 'react';
import AppIcon from '../components/AppIcon';
import useMobile from '../utils/useMobile';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const isMobile = useMobile();
  return (
    <div>
      <Section>
        <h1>Contact us</h1>
      </Section>
      <ContactForm />
      <div>
        <Section>
          <AppIcon name="whatsapp" size={32} /> +393477865383
          <br />
          <AppIcon name="email" size={32} /> oltreilteatro@gmail.com
        </Section>
      </div>
    </div>
  );
};

export default ContactPage;
