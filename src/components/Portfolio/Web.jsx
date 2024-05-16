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
      .get("https://portfolio-server-nine-ruddy.vercel.app/getCaseWeb")
      .then((webcases) => {
        setWebCases(webcases.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="d-flex flex-row flex-wrap justify-content-start text-center">
        {loading ? (
          <Loading />
        ) : (
          webcases.map((webcase, i) => {
            return (
              <Fragment key={i}>
                <div className="flex-basis-440 me-2">
                  <CardCase
                    image={webcase.image}
                    title={webcase.title}
                    url={webcase.description}
                    type={webcase.type}
                  />
                </div>
              </Fragment>
            );
          })
        )}
      </div>
    </>
  );
}
