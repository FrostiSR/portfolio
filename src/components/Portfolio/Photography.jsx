import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import ImageCase from "./ImageCase";
import Pagination from "../Pagination/Pagination";

export default function Photography() {
  const [photocases, setPhotoCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const recPerPage = 5;
  const lastIndex = page * recPerPage;
  const firstIndex = lastIndex - recPerPage;
  const records = photocases.slice(firstIndex, lastIndex);
  const npage = Math.ceil(photocases.length / recPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prevPage() {
    if (page !== 1) {
      setPage(page - 1);
    }
  }
  function changePage(id) {
    setPage(id);
  }
  function nextPage() {
    if (page !== npage) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    axios
      .get("https://portfolio-server-nine-ruddy.vercel.app/getCasePhotography")
      .then((photocases) => {
        setPhotoCases(photocases.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="row justify-content-center text-center">
        {loading ? (
          <Loading />
        ) : (
          records.map((photocase, i) => {
            return (
              <Fragment key={i}>
                <div className="flex-basis-440 col-lg-6 p-2">
                  <ImageCase
                    image={photocase.image}
                    title={photocase.title}
                    type={photocase.type}
                  />
                </div>
              </Fragment>
            );
          })
        )}
      </div>
      <nav aria-label="..." className="d-flex justify-content-center p-5">
        <Pagination clickFunc={prevPage} pageConst={"Previous"} />
        {numbers.map((n, i) => (
          <Fragment key={i}>
            <Pagination
              clickFunc={() => changePage(n)}
              activeClassPag={`${page === n ? "active" : ""}`}
              pageConst={n}
            />
          </Fragment>
        ))}
        <Pagination clickFunc={nextPage} pageConst={"Next"} />
      </nav>
    </>
  );
}
