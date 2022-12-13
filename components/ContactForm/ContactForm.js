import { useCallback, useState } from 'react';
import styles from './ContactForm.module.css';
import TextInput from './TextInput';

function apiSendMessage({ name, email, message }) {
  console.log('apiSendMessage() - name:', name, 'email:', email, 'message:', message);
  return Math.random() < 0.5;
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormState((oldValue) => ({ ...oldValue, [name]: value }));
  }, []);

  const onSubmitNew = (event) => {
    event.preventDefault();
    const res = apiSendMessage(formState);
    if (res) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  console.log('formState:', formState);

  return (
    <form className={styles.form} method="GET" onSubmit={onSubmitNew}>
      <h1>Contact us</h1>
      <fieldset className={styles.fieldset}>
        <TextInput name="name" label="Name" type="text" placeholder="Your name here" onChange={onInputChange} />

        <TextInput name="email" label="Email" type="email" placeholder="Your email here" onChange={onInputChange} />

        <TextInput
          isMultiLine
          name="message"
          label="Message"
          placeholder="Your message here"
          onChange={onInputChange}
        />
      </fieldset>
      {submitted && <div className={styles.ok}>Successfully send</div>}
      {error && <div className={styles.error}>Something went wrong</div>}
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
