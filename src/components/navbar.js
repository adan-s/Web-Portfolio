import React from 'react'
import logo from '../Images/logo.png'
export default function navbar(props) {
  return (
    <div>
       <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="logoText">
              Code with Me
              <i className="far fa-smile navbar-button"></i>
            </span>
          </div>
          <div className="navbar-name">{props.title}</div>
          <div className="navbar-buttons">
            <a href="https://github.com/adan-s">
              <i className="fab fa-github navbar-button"></i>
            </a>
            <button type="button" className="btn btn-success">
              <a className="contactLink" href="/contact">
                Contact Me
              </a>
            </button>
          </div>
        </div>
    </div>
  )
}
