import "../pages/Contact.css";
import "../App.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function Contact() {
  return (
    <div className="ContactPage">
      <Navbar title="Contact Me" />
      <h1 className="header">Contact Me</h1>
      <div className="ContactInfo1">
        <div className="call">
          <h5>
            <i className="fa fa-phone"></i>+92 90078601
          </h5>
        </div>
        <div className="email">
          <h5>
            <i className="fa fa-envelope"></i>adansalman73@gmail.com
          </h5>
        </div>
        <div className="location">
          <h5>
            <i className="fa fa-map-marker"></i>Faisalabad, Pakistan
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}
