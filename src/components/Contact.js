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
              <FaGithubSquare className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
