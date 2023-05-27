import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  var currentDate = new Date();
  var thisYear = currentDate.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/arsalan-malik-746913237/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/ArsalanYmalik"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/ArslanYM"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {thisYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
