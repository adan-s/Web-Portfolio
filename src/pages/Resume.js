import "../pages/Resume.css";
import "../App.css";
import resumeimg from "../Images/resumeimg.jpeg";
import Footer from "../components/footer";
import MyPDF from "../resources/Adan'sResume.pdf";
import Navbar from "../components/navbar";

export default function Resume() {
  return (
    <div className="resume-page">
      <Navbar title="Resume" />

      <div className="body">
        <div className="img">
          <img src={resumeimg} alt="Wrong Path" className="resume" />
        </div>
        <div>
          <button type="button" className="btn btn-success download">
            <a
              href={MyPDF}
              download="Adan Salman's Resume.pdf"
              className="download"
            >
              <i class="fa fa-download"></i>
              <span className="downloadText">Download CV </span>
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
