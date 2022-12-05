import React from "react";
import AppIcon from "../components/AppIcon";
import useMobile from "../utils/useMobile";
import Section from "../components/Section";

const ContactPage = () => {
  const isMobile = useMobile();
  return (
    <div>
      {/* <div
        style={
          !isMobile
            ? {
                lineHeight: "1.15",
                fontSize: "3rem",
                marginLeft: "3.2rem",
              }
            : {
                lineHeight: "1.15",
                fontSize: "3.5rem",
              }
        }
      > */}
      <Section>
        <h1>Contact us</h1>
      </Section>
      {/* </div> */}
      <Section text="Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks. is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.etxetxtetxetxtetvbfjwbigufhdjokefiudjnskmafjhiuggfbdnjgiowenlkmfweklewmwfefjklambkdngoiejgowoppp" />
      {/* <div
        style={{
          display: "flex",
          justifySelf: "center",
          gap: "1rem",
          flexDirection: "column",
        }}
      > */}
      <Section>
        <AppIcon name="Contact" size={32} /> +3420490249 <br />
      </Section>
      <Section>
        <AppIcon name="email" size={32} /> tatata@gmail.com
      </Section>
      {/* </div> */}
    </div>
  );
};

export default ContactPage;
