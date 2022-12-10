import React from "react";
import AppIcon from "../components/AppIcon";
import useMobile from "../utils/useMobile";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const isMobile = useMobile();
  return (
    <div>
      <Section>
        <h1>Contact us</h1>
      </Section>

      <ContactForm />

      {/* <Section text="Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks. is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.etxetxtetxetxtetvbfjwbigufhdjokefiudjnskmafjhiuggfbdnjgiowenlkmfweklewmwfefjklambkdngoiejgowoppp" /> */}
      <div>
        <Section>
          <AppIcon name="whatsapp" size={32} /> +393477865383 <br />
        </Section>
        <Section>
          <AppIcon name="email" size={32} /> tatata@gmail.com
        </Section>
      </div>
    </div>
  );
};

export default ContactPage;
