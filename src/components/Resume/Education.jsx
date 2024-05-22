import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import Card from "./Card";
import Loading from "../Loading/Loading";
import Accordion from "react-bootstrap/Accordion";

export default function Education() {
  const [educations, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-server-nine-ruddy.vercel.app/getEdu")
      .then((educations) => {
        setEducation(educations.data);
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
              <h4 className="fw-bold title-text">My Education</h4>
            </Accordion.Header>
            <Accordion.Body>
              {loading ? (
                <Loading />
              ) : (
                educations.map((education, i) => {
                  return (
                    <Fragment key={i}>
                      <Card
                        date={education.date}
                        title={education.title}
                        place={education.location}
                        description={education.description}
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
