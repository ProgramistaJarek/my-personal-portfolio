import { useRef, useState } from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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
        <h2>Contact</h2>
        <div className="contact-flex">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <label>
              Email:
              <input
                type="text"
                name="user_email"
                value={email}
                onChange={updateEmail}
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={message}
                onChange={updateMessage}
              />
            </label>
            <button className="btn-form" type="submit">
              Send
            </button>
          </form>
          <div className="social">
            <h3>You can contact me via:</h3>
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
              <a
                href="https://github.com/ProgramistaJarek"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
