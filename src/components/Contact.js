import { useRef, useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [styleInputText, setStyleInputText] = useState(false);
  const [styleTextArea, setStyleTextArea] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const emailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const validationEmail = (e) => {
    e.preventDefault();

    if (email.match(emailValid)) {
      setStyleInputText(false);
      if (message === "") {
        setStyleTextArea(true);
      } else {
        setStyleTextArea(false);
        sendEmail();
        setButtonDisabled(true);
      }
    } else {
      setStyleInputText(true);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_6hvr8ag",
        "template_lw3fqfr",
        form.current,
        "TEtFnTgmKn5JEyMlT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setMessage("");
          setButtonDisabled(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <footer className="contact">
      <div className="container">
        <h2>Kontakt</h2>
        <div className="contact-flex">
          <form className="form" ref={form} onSubmit={validationEmail}>
            <label>
              Email:
              <input
                type="text"
                name="user_email"
                value={email}
                onChange={updateEmail}
                className={
                  styleInputText ? "text-input red-class-input" : "text-input"
                }
              />
            </label>
            <label>
              Wiadomość:
              <textarea
                name="message"
                value={message}
                onChange={updateMessage}
                className={
                  styleTextArea ? "text-area red-class-textarea" : "text-area"
                }
                rows="5"
                cols="45"
                placeholder={
                  styleTextArea
                    ? "Jeśli chcesz już mi coś wysłać, napisz coś :)"
                    : ""
                }
              />
            </label>
            <button
              className={
                buttonDisabled
                  ? "btn-form disabled:opacity-80 cursor-not-allowed"
                  : "btn-form"
              }
              type="submit"
              disabled={buttonDisabled}
            >
              Wyślij
            </button>
          </form>
          <div className="social">
            <h3>Znajdziesz mnie również tutaj:</h3>
            <div className="social-links">
              <a
                href="https://github.com/ProgramistaJarek"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/jarosław-lepich-4a66471b2"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              {/* <a
                href="https://github.com/ProgramistaJarek"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
