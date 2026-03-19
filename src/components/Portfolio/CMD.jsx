import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import CardCase from "./CardCase";

export default function Web() {
  const [webcases, setWebCases] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://portfolio-server-nine-ruddy.vercel.app/getCaseCmd")
      .then((webcases) => {
        setWebCases(webcases.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="d-flex flex-row flex-wrap justify-content-start text-center">
         <Fragment>
                <div className="flex-basis-440 me-2">
                   <div>
        <div className="img-container">
          <a href="https://www.figma.com/proto/YULRQycJocoWXdwAdhkYY8/v3_high-fidelity?node-id=39-253&t=dJ7DYz1EoJ1Erzvg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A556&show-proto-sidebar=1" target="_blank">
            <img
              className="img-fluid"
              loading="lazy"
              src={
                "https://res.cloudinary.com/dim8i07e6/image/upload/v1773915723/Slob_Kool_Teal_expositie_v2_tskaba.jpg"
              }
              alt={alt}
            />
            <div className="image-hover">
              <h4>Depot Beleving Prototype</h4>
            </div>
          </a>
        </div>
        <h5>{title}</h5>
        <p className="description-text">{type}</p>
      </div>
                </div>
              </Fragment>
      </div>
    </>
  );
}
