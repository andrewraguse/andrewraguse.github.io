import './Contact.scss';
import TextBox from '../../components/textbox/TextBox';
import ArrowButton from '../../components/buttons/arrow-button/ArrowButton';

interface Props {
  theme: string;
}
function Contact({ theme }: Props) {
  return (
    <>
      <div className="primary-content-wrapper contact-page-content-wrapper">
        <h1 className="animate__animated animate__bounce">CONTACT</h1>
        <TextBox theme={theme}>
          <div id="contact-page-content">
            <p>Have any questions, send me a message!</p>
            <div id="contact-page-name-email">
              <div className="mb-3 animate__animated animate__pulse">
                <label form="form-control-input-label-1" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control form-control-input-1"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-3 animate__animated animate__pulse">
                <label form="form-control-input-label-2" className="form-label">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="form-control form-control-input-2"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="mb-3 animate__animated animate__pulse">
              <label form="form-control-input-label-3" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control form-control-input-3"
                placeholder="Write your message here..."
                rows={4}
              />
            </div>
            <ArrowButton link="/about">Send</ArrowButton>
          </div>
        </TextBox>
      </div>
    </>
  );
}

export default Contact;
