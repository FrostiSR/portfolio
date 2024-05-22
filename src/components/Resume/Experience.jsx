import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import Card from "./Card";
import Loading from "../Loading/Loading";
import Accordion from "react-bootstrap/Accordion";

export default function Experience() {
  const [experiences, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-server-nine-ruddy.vercel.app/getExp")
      .then((experiences) => {
        setExperience(experiences.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Col xs={12} md={6} className="text-start p-2">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4 className="fw-bold title-text">My Work Experience</h4>
            </Accordion.Header>
            <Accordion.Body>
              {loading ? (
                <Loading />
              ) : (
                experiences.map((experience, i) => {
                  return (
                    <Fragment key={i}>
                      <Card
                        date={experience.date}
                        title={experience.title}
                        place={experience.location}
                        description={experience.description}
                        techs={experience.techs.map((tech, i) => {
                          return (
                            <Fragment key={i}>
                              <div className="card-techs me-2">
                                <p>{tech}</p>
                              </div>
                            </Fragment>
                          );
                        })}
                      />
                    </Fragment>
                  );
                })
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </>
  );
}
