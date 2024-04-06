import { FormEvent, useRef, useState } from 'react';
import './Contact.scss';
import TextBox from '../../components/textbox/TextBox';
import StandardButton from '../../components/buttons/standard-button/StandardButton';
import emailjs from '@emailjs/browser';
import { Modal } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

interface Props {
  theme: string;
}

//todo update this page with email functionality
/*
For this component we need to do the following things:
• Add contact, phone number, email
• Add emailjs text boxes
• Send test email
*/
function Contact({ theme }: Props) {
  const form = useRef(document.createElement('form') as HTMLFormElement);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [cookies, setCookie] = useCookies(['email_send_count']);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (cookies.email_send_count > 1) {
      clearInputs();
      setModalMessage(messageLimitExceededModalMessage);
      setShowModal(true);
      console.log('Max number of emails sent in 24 hours.');
    } else {
      emailjs
        .sendForm(
          'service_k7snms6',
          'template_yev6pmo',
          form.current,
          'TvHHQV2wGllq9UwJo'
        )
        .then(
          (result) => {
            clearInputs();
            setModalMessage(successModalMessage);
            setShowModal(true);
            increaseEmailCount();
            console.log(result.text);
          },
          (error) => {
            clearInputs();
            setModalMessage(errorModalMessage);
            setShowModal(true);
            console.log(error.text);
          }
        );
    }
  };

  function increaseEmailCount() {
    let date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    setCookie('email_send_count', cookies.email_send_count + 1, {
      expires: date,
    });
  }

  function clearModal() {
    console.log('Clearing modal');
    setShowModal(false);
  }

  function clearInputs() {
    form.current.reset();
  }

  return (
    <>
      <div className="primary-content-wrapper contact-page-content-wrapper">
        <h1 className="animate__animated animate__bounce">CONTACT</h1>
        <TextBox theme={theme}>
          <h4 id="contact-header-text">
            Feel free to send me a message if you have any questions!
          </h4>
          <div id="contact-form-wrapper">
            <form
              className={`${theme} contact-form`}
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name</label>
              <input
                className={`${theme} input-form`}
                type="text"
                name="user_name"
                required={true}
                minLength={1}
              />
              <label>Email</label>
              <input
                className={`${theme} input-form`}
                type="email"
                name="user_email"
              />
              <label>Message</label>
              <textarea
                className={`${theme} input-form`}
                name="message"
                required={true}
                minLength={1}
                maxLength={500}
              />
              <Modal
                className="standard-text-dark"
                show={showModal}
                onHide={() => clearModal()}
              >
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                  <StandardButton invert={true} onClick={() => clearModal()}>
                    Close
                  </StandardButton>
                </Modal.Footer>
              </Modal>
              <StandardButton
                animation="animate__animated animate__slideInUp"
                addArrowIcon={true}
                type="submit"
              >
                Submit
              </StandardButton>
            </form>
          </div>
        </TextBox>
      </div>
    </>
  );
}

const successModalMessage = 'Your message has been sent!';
const errorModalMessage =
  'Therre was a problem sending your message. Please try again.';
const messageLimitExceededModalMessage =
  'Sorry, you have sent the maximum number of messages today, please try again tomorrow.';

export default Contact;
