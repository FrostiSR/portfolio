import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Services from "./Services";
import Motivations from "./Motivations";
import { ABOUT } from "../../data";
import Socials from "../SocialIcons/Socials";
import Section from "../Section/Section";

export default function About() {
  return (
    <Section
      id="about"
      className="d-flex flex-column"
      title={"About"}
      subTitle={"Know Me More"}
    >
      <Row className="text-center justify-content-evenly">
        <Col xs={12} md={12} className="text-start p-2">
          <h4 className="fw-bold title-text">{ABOUT.about.left.title}</h4>
          <p
            className="description-text"
            dangerouslySetInnerHTML={{ __html: ABOUT.about.left.content }}
          ></p>
        </Col>
        <Col xs={12} md={12} className="text-center p-2 py-4">
          <h4 className="fw-bold title-text">Quote</h4>
          <blockquote className="blockquote mt-3">
            <p className="display-6 fst-italic" style={{ color: 'var(--bs-teal, #2dd4bf)', lineHeight: '1.4' }}>
              "No matter the obstacles, hard work and perseverance always pay off."
            </p>
          </blockquote>
        </Col>
        {/* <Col xs={12} md={6} className="text-start p-2">
          <p>
            <span className="fw-bold head-color">Name: </span>{" "}
            {ABOUT.about.right.name}
          </p>
          <p>
            <span className="fw-bold head-color">Email: </span>{" "}
            {ABOUT.about.right.email}
          </p>
          <p>
            <span className="fw-bold head-color">Age: </span>{" "}
            {ABOUT.about.right.age}
          </p>
          <p>
            <span className="fw-bold head-color">From: </span>{" "}
            {ABOUT.about.right.from}
          </p>
          <p>
            <span className="fw-bold head-color">Freelance: </span>
            {ABOUT.about.right.freelance}
          </p>
          <Socials />
        </Col> */}
      </Row>
      <Motivations />
      <Services />
    </Section>
  );
}
