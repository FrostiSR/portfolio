import { useRef } from "react";
import Section from "../Section/Section";
import Row from "react-bootstrap/Row";
import Button from "../Buttons/Button";
import ContentModal from "../Modal/ContentModal";
import { DOCS } from "../../data";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import { GB, NL } from "country-flag-icons/react/3x2";

export default function Resume() {
  const modal = useRef();
  function handleOpenClick() {
    modal.current.open();
  }

  return (
    <>
      <ContentModal ref={modal} size={"lg"} title={"Choose Language"}>
        <a className="text-dark p-3" href={DOCS.CV.EN} download>
          <GB title="English" className="flag-icon" /> CV
        </a>
        <a className="text-dark p-3" href={DOCS.CV.NL} download>
          <NL title="Dutch" className="flag-icon" /> CV
        </a>
      </ContentModal>
      <Section
        id="resume"
        className="d-flex flex-column align-items-center"
        title={"Summary"}
        subTitle={"Resume"}
      >
        <Row className="text-center justify-content-evenly">
          <Experience />
          <Education />
        </Row>
        <Skills />
        <Button
          id="btn-fill"
          className="custom-button mt-3"
          name={"Download CV"}
          onClick={handleOpenClick}
        >
          <i className="bi bi-cloud-arrow-down-fill"></i>
        </Button>
      </Section>
    </>
  );
}
