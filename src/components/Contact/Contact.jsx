import ContactForm from "./ContactForm";
import Section from "../Section/Section";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="d-flex flex-column"
      title={"Contact"}
      subTitle={"Get In Touch"}
    >
      <Row className="text-center justify-content-evenly">
        <Col xs={12} md={4} className="text-start p-2">
          <h4>Feel Free To Contact Me</h4>
          <p className="d-flex flex-row align-items-center gap-2">
            <i className="icon bi bi-geo-alt-fill"></i>
            <span className="fw-bold">Paramaribo, Suriname</span>
          </p>
          <p className="d-flex flex-row align-items-center gap-2">
            <i className="icon bi bi-envelope-fill"></i>
            <span className="fw-bold">daniel.dosramos08@gmail.com</span>
          </p>
        </Col>
        <Col xs={12} md={8} className="text-start p-2">
          <ContactForm />
        </Col>
      </Row>
    </Section>
  );
}
