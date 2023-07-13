import logo from "./logo.svg";
import "./App.css";
export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="navbar">
          <div class="navbar-logo">
            <img src={logo} className="App-logo" alt="logo" />{" "}
          </div>
          <div class="navbar-name">Introductory Page</div>
          <div class="navbar-buttons">
            <a href="https://github.com/adan-s">
              <i class="fab fa-github navbar-button"></i>
            </a>
            <a href="https://www.instagram.com/a.d.a.n_s/">
              <i class="fab fa-instagram navbar-button"></i>
            </a>
            <a href="https://www.linkedin.com/in/adan-salman/">
              <i class="fab fa-linkedin-in navbar-button"></i>
            </a>
          </div>
        </div>

        <h1 className="introHeading">
          Hi, I am <span className="name">Adan Salman</span>
        </h1>
        <h2 className="occupation">A Web Developer.</h2>
        <p className="introPara">
          I am a passionate web developer with a keen interest in frontend
          development.<br></br>
          Programming is my strong suit, and I thoroughly enjoy crafting
          visually appealing <br></br>and interactive user experiences. With a
          deep understanding of HTML, CSS, and<br></br>JavaScript, I strive to
          create clean and efficient code that brings ideas to life on the{" "}
          <br></br>web. Constantly keeping up with the latest trends and
          advancements in frontend <br></br>technologies,I am dedicated to
          delivering seamless and intuitive digital solutions.
          <br></br>My commitment to excellence, attention to detail, and
          problem-solving skills make <br></br>me a reliable and valuable asset
          in the world of web development.
        </p>
      </header>
      <footer className="footer">
        {/* <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/public/pages/contact'>Contact</Link></li>
              <li><Link to='/public/pages/resume'>Resume</Link></li>
          </ul> */}
      </footer>
    </div>
  );
}
