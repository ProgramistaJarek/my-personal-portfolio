import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <footer className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-flex">
          <form className="form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Number:
              <input type="text" name="number" />
            </label>
            <label>
              Message:
              <textarea></textarea>
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
