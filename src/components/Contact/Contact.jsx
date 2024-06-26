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
          <h4 className="title-text fw-bold">Feel Free To Contact Me</h4>
          <p className="d-flex flex-row align-items-center gap-2">
            <i className="icon bi bi-geo-alt-fill"></i>
            <span className="description-text">Paramaribo, Suriname</span>
          </p>
          <p className="d-flex flex-row align-items-center gap-2">
            <i className="icon bi bi-envelope-fill"></i>
            <span className="description-text">
              daniel.dosramos08@gmail.com
            </span>
          </p>
        </Col>
        <Col xs={12} md={8} className="text-start p-2">
          <ContactForm />
        </Col>
      </Row>
    </Section>
  );
}
