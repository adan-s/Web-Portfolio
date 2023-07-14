import "./App.css";
import logo from "./Images/logo.png";
import myimage from "./Images/image.png";
import secondImg from "./Images/secondimg.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bootstrapImg from "./Images/bootstrapImg.PNG";
import jsImg from "./Images/jsImg.PNG";
import tailwindImg from "./Images/tailwindImg.PNG";
import cssImg from "./Images/cssImg.PNG";
import reactImg from "./Images/reactImg.PNG";
import nextjsImg from "./Images/nextjsImg.PNG";
import Footer from "./components/footer";
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar title="Portfolio"/>
        <div className="firstDivBg">
          <div className="firstDiv">
            <div className="leftSide">
              <h1 className="introHeading1">Web Developer</h1>
              <h1 className="introHeading2">
                Hey! I am <div className="name">Adan Salman</div>
              </h1>
              <p className="introPara">
                I am a passionate web developer with a keen interest in frontend
                development. Programming is my strong suit, and I thoroughly
                enjoy crafting visually appealing and interactive user
                experiences. With a deep understanding of HTML, CSS, and
                JavaScript, I strive to create clean and efficient code that
                brings ideas to life on the web. Constantly keeping up with the
                latest trends and advancements in frontend technologies, I am
                dedicated to delivering seamless and intuitive digital
                solutions. My commitment to excellence, attention to detail, and
                problem-solving skills make me a reliable and valuable asset in
                the world of web development.
              </p>

              <h1 className="follow">Follow Me</h1>
              <div className="social-buttons">
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
            </div>
            <div className="rightSide">
                <img src={myimage} className="image" alt="Failed to load." />
           
             
            </div>
          </div>
        </div>
        <div className="secondDivBg">
          <div className="secondDiv">
            <div className="leftSide1">
              <img
                src={secondImg}
                width={"450px"}
                height={"400px"}
                className="aboutMeImg"
              ></img>
            </div>
            <div className="rightSide1">
              <h6 className="aboutMe">ABOUT ME</h6>
              <h3 className="aboutMeIntro">
                WHY HIRE ME FOR YOUR NEXT<br></br>PROJECT ?
              </h3>
              <p className="aboutMePara">
                Hiring me for your next project would be a wise choice for
                several reasons. At the age of 20, I bring a fresh perspective
                and a high level of enthusiasm to the table. Currently pursuing
                my Bachelor's degree in Computer Science, I am equipped with the
                latest knowledge and skills in this rapidly evolving field. My
                education has provided me with a solid foundation in various
                programming languages, algorithms, and software development
                methodologies. Additionally, I have actively engaged in several
                hands-on projects, both independently and collaboratively, which
                have sharpened my problem-solving abilities and fostered a
                strong work ethic. With a passion for innovation and a drive to
                excel, I am committed to delivering high-quality results within
                deadlines. My adaptability and eagerness to learn enable me to
                quickly grasp new concepts and technologies, ensuring that I can
                readily contribute to your project's success. By hiring me, you
                will not only gain a dedicated and dependable team member but
                also an aspiring professional with a strong foundation and a
                relentless pursuit of excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="thirdDiv">
          <h5 className="serviceHeading">
            <strong>
              &nbsp;&nbsp;&nbsp; M Y&nbsp;&nbsp;&nbsp; S K I L L S
              &nbsp;&nbsp;&nbsp; P R O G R E S S &nbsp;&nbsp;&nbsp; S O
              &nbsp;&nbsp;&nbsp; F A R
            </strong>
          </h5>

          <h1 className="services">My Skills</h1>

          <div className="cards">
            <div className="card1">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={bootstrapImg}
                  style={{
                    width: "92px",
                    height: "70px",
                    marginLeft: "50px",
                    marginTop: "4px",
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Bootstrap</Card.Title>
                  <Button className="bbtn" variant="primary">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beginner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card2">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={jsImg}
                  style={{ width: "90px", height: "75px", marginLeft: "50px" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Javascript</Card.Title>

                  <Button className="jsbtn" variant="primary">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beginner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card3">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={tailwindImg}
                  style={{ width: "90px", height: "80px", marginLeft: "50px" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Tailwind</Card.Title>

                  <Button className="tbtn" variant="primary">
                    &nbsp;&nbsp;&nbsp;Intermediate&nbsp;&nbsp;&nbsp;
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={cssImg}
                  style={{
                    width: "80px",
                    height: "70px",
                    marginLeft: "50px",
                    marginTop: "6px",
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-center">CSS</Card.Title>

                  <Button className="cbtn" variant="primary">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card5">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={reactImg}
                  style={{ width: "80px", height: "83px", marginLeft: "50px" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">React</Card.Title>

                  <Button className="rbtn" variant="primary">
                    &nbsp;&nbsp;&nbsp;Intermediate&nbsp;&nbsp;&nbsp;
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card5">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={nextjsImg}
                  style={{ width: "100px", height: "80px", marginLeft: "47px" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">NextJS</Card.Title>

                  <Button className="nbtn" variant="primary">
                    &nbsp;&nbsp;&nbsp;Intermediate&nbsp;&nbsp;&nbsp;
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="contactHeading">
          <h5 className="serviceHeading">
            <strong>
              &nbsp;&nbsp;&nbsp; I&nbsp;&nbsp;&nbsp; W A N T &nbsp;&nbsp;&nbsp;
              T O &nbsp;&nbsp;&nbsp; H E A R &nbsp;&nbsp;&nbsp; F R O
              M&nbsp;&nbsp;&nbsp; Y O U
            </strong>
          </h5>
          <h1 className="services">Contact Me</h1>
        </div>
        <div className="ContactInfo">
          <div className="call">
            <h5>
              <i className="fa fa-phone"></i>+92 90078601
            </h5>
          </div>
          <div className="email">
            <h5>
              {" "}
              <i className="fa fa-envelope"></i>adansalman73@gmail.com
            </h5>
          </div>
          <div className="location">
            <h5>
              {" "}
              <i className="fa fa-map-marker"></i>Faisalabad, Pakistan
            </h5>
          </div>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
