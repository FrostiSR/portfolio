import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import Section from "../Section/Section";
import ImTxtCard from "./ImTxtCard";
import Loading from "../Loading/Loading";

export default function Extra() {
  const [extras, setExtras] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://portfolio-server-nine-ruddy.vercel.app/getExtra")
      .then((extras) => {
        setExtras(extras.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Section
      id="extra"
      className="d-flex flex-column"
      title={"Activities"}
      subTitle={"Extracurricular"}
    >
      {loading ? (
        <Loading />
      ) : (
        extras.map((extra, i) => {
          return (
            <Fragment key={i}>
              <ImTxtCard
                className={extra.direction}
                title={extra.title}
                description={extra.description}
                img={extra.image}
                // link={extra.link}
              />
            </Fragment>
          );
        })
      )}
    </Section>
  );
}
