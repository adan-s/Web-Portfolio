import React from 'react'
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div>
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
        <hr />
        <p className="footerPara">
          Thank you for visiting my portfolio website! I hope you enjoyed
          exploring my work. Feel free to reach out to me for any inquiries or
          collaboration opportunities. Remember, creativity knows no bounds, so
          let's create something extraordinary together!
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
            href="https://twitter.com/adans0_0"
            className="button twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <p>&copy; 2023 Adan Salman. All rights reserved.</p>
      </footer>
    </div>
  )
}
