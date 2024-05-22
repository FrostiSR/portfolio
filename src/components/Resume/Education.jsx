import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import Card from "./Card";
import Loading from "../Loading/Loading";

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
        <h4 className="fw-bold title-text">My Education</h4>
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
      </Col>
    </>
  );
}
