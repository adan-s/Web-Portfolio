import "../pages/Contact.css";
import "../App.css"
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="ContactPage">
      <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="logoText">
              Code with Me
              <i className="far fa-smile navbar-button"></i>
            </span>
          </div>
          <div className="navbar-name">Contact Me</div>
          <div className="navbar-buttons">
            <a href="https://github.com/adan-s">
              <i className="fab fa-github navbar-button"></i>
            </a>
          
          </div>
        </div>
      <h1 className="header">Contact Me</h1>
      <form className="contact-form">
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <footer className="footer">
        <ul className="footer-ul">
          <li className="footer-li">
            <Link className="link-li" to="/">
              Home
            </Link>
          </li>
          <li className="footer-li">
            <Link className="link-li" to="/contact">
              Contact Me
            </Link>
          </li>
          <li className="footer-li">
            <Link className="link-li" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
        <hr/>
        <p className="footerPara">
        Thank you for visiting my portfolio website! I hope you enjoyed exploring my work. 
        Feel free to reach out to me for any inquiries or collaboration opportunities. 
        Remember, creativity knows no bounds, so let's create something extraordinary together!
        </p>

        <div className="social-buttonsFooter">
                <a
                  href="https://www.linkedin.com/in/adan-salman/"
                  className="button linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/a.d.a.n_s/"
                  className="button insta"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/your_twitter_account"
                  className="button twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>

        <p>&copy; 2023 Adan Salman. All rights reserved.</p>
      </footer>
    </div>
  );
}
