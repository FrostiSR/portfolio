import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import Loading from "../Loading/Loading";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-server-nine-ruddy.vercel.app/getSkills")
      .then((skills) => {
        setSkills(skills.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="mt-5">
        <h4 className="fw-bold title-text">My Skills</h4>
        <div className="text-center">
          <div className="card-custom w-100 mb-2 mt-2">
            <span>
              {loading ? (
                <Loading />
              ) : (
                skills.map((skill, i) => {
                  return (
                    <Fragment key={i}>
                      <span className="skill-dot"> • </span>
                      {skill.name}
                    </Fragment>
                  );
                })
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
