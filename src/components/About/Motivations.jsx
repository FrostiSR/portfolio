import Header from "../Header/Header";
import Col from "react-bootstrap/Col";
import { ABOUT } from "../../data";
import "./About-Services.css";

export default function About() {
    return (
        <div>
            <Header title={"MOTIVATION"} subTitle={"What drives me"} />

            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                <Col xs={12} md={6} className="text-start p-2">
                    <div className="d-flex flex-row align-items-start gap-3 h-100 service-card">
                        <div className="service-box">
                            <i className="bi bi-palette-fill"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h4 className="fw-bold title-text">
                                {ABOUT.motivations.creativity.title}
                            </h4>
                            <p className="description-text">
                                {ABOUT.motivations.creativity.content}
                            </p>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={6} className="text-start p-2">
                    <div className="d-flex flex-row align-items-start gap-3 h-100 service-card">
                        <div className="service-box">
                            <i className="bi bi-heart-fill"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h4 className="fw-bold title-text">
                                {ABOUT.motivations.meaning.title}
                            </h4>
                            <p className="description-text">
                                {ABOUT.motivations.meaning.content}
                            </p>
                        </div>
                    </div>
                </Col>
            </div>
        </div>
    );
}
