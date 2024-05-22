import Header from "../Header/Header";
import Col from "react-bootstrap/Col";
import { ABOUT } from "../../data";
import "./About-Services.css";

export default function About() {
  return (
    <div>
      <Header title={"Services"} subTitle={"What Do I Do?"} />

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
        <Col xs={12} md={6} className="text-start p-2">
          <div className="d-flex flex-row align-items-center gap-3">
            <div className="service-box">
              <i className="bi bi-palette-fill"></i>
            </div>
            <div>
              <h4 className="fw-bold title-text">
                {ABOUT.services.graphic.title}
              </h4>
              <p className="description-text">
                {ABOUT.services.graphic.content}
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-start p-2">
          <div className="d-flex flex-row align-items-center gap-3">
            <div className="service-box">
              <i className="bi bi-code-slash"></i>
            </div>
            <div>
              <h4 className="fw-bold title-text">{ABOUT.services.web.title}</h4>
              <p className="description-text">{ABOUT.services.web.content}</p>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
}
