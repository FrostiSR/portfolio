import "./CardCase.css";
import { useRef } from "react";
import ImageModal from "../Modal/Modal";

export default function ImageCase({ image, alt, title, type }) {
  const modal = useRef();
  function handleOpenClick() {
    modal.current.open();
  }

  return (
    <>
      <ImageModal ref={modal} size={"lg"}>
        <img
          className="w-100"
          loading="lazy"
          src={
            "https://res.cloudinary.com/duicqd6cu/image/upload/v1715455361/" +
            image
          }
          alt={alt}
        />
      </ImageModal>
      <div>
        <div className="img-container">
          <img
            className="img-fluid"
            loading="lazy"
            src={
              "https://res.cloudinary.com/duicqd6cu/image/upload/v1715455361/" +
              image
            }
            alt={title}
          />
          <div className="image-hover" onClick={handleOpenClick}>
            <i className="bi bi-image fs-1"></i>
            <h4>{title}</h4>
            {/* <p>{type}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
