import { useCallback, useState } from 'react';
import { CONFIG } from '../../utils/consts';
import styles from './ContactForm.module.css';
import TextInput from './TextInput';

async function sendEmail({ name, email, message }) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: 'service_a9dr3v3',
      template_id: 'template_0584dcj',
      user_id: 'IfczsNECPTYg4kf8W',
      template_params: {
        // from_name: name,
        from_name: email,
        to_name: CONFIG.website.title,
        reply_to: email,
        message,
      },
    }),
  };
  return fetch('https://api.emailjs.com/api/v1.0/email/send', payload);
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormState((oldValue) => ({ ...oldValue, [name]: value }));
  }, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(false);

    const { email, message } = formState;
    if (message.trim() === '') {
      setError('Message is missing');
      return;
    }
    if (!validateEmail(email)) {
      setError('Email is incorrect');
      return;
    }

    const res = await sendEmail(formState);

    if (res.ok) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Something went wrong');
    }
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <h1>Contact us</h1>
      <fieldset className={styles.fieldset}>
        {/* <TextInput name="name" label="Name" type="text" placeholder="Your name here" onChange={onInputChange} /> */}

        <TextInput name="email" label="Email *" type="email" placeholder="Your email here" onChange={onInputChange} />

        <TextInput
          isMultiLine
          name="message"
          label="Message *"
          placeholder="Your message here"
          onChange={onInputChange}
        />
      </fieldset>
      {submitted && <div className={styles.ok}>Successfully sent</div>}
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
