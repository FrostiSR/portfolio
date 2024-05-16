import Button from "../Buttons/Button";
import Socials from "../SocialIcons/Socials";
import "./Home.css";
import HomeContent from "./HomeContent";
import { useRef } from "react";
import ContentModal from "../Modal/ContentModal";
import { DOCS } from "../../data";
import { GB, NL } from "country-flag-icons/react/3x2";

export default function Home() {
  const modal = useRef();
  function handleOpenClick() {
    modal.current.open();
  }
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <ContentModal ref={modal} size={"lg"} title={"Choose Language"}>
        <a className="text-dark p-3" href={DOCS.CV.EN} target="_blank" download>
          <GB title="English" className="flag-icon" /> CV
        </a>
        <a className="text-dark p-3" href={DOCS.CV.NL} download>
          <NL title="Dutch" className="flag-icon" /> CV
        </a>
      </ContentModal>
      <section id="home">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center">
          <HomeContent />
          <div className="d-inline">
            <Button
              id="btn-fill"
              className="custom-button  me-3 mb-3"
              name={"Download CV"}
              onClick={handleOpenClick}
            >
              <i className="bi bi-cloud-arrow-down-fill"></i>
            </Button>
            <Button
              id="btn-outline"
              className="custom-button "
              name={"Hire Me"}
              onClick={scrollToSection}
            />
          </div>
          <hr className="style-two" />
          <Socials />
        </div>
      </section>
    </>
  );
}
