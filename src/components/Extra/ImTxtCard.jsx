import Col from "react-bootstrap/Col";
import ImageModal from "../Modal/Modal";
import { useRef } from "react";

export default function ImTxtCard({ title, description, img, link, ...props }) {
  const modal = useRef();
  function handleOpenClick() {
    modal.current.open();
  }
  return (
    <>
      <ImageModal ref={modal} size={"lg"}>
        <img
          className="img-fluid image-shadow"
          loading="lazy"
          src={
            "https://res.cloudinary.com/duicqd6cu/image/upload/v1715827025/" +
            img
          }
          alt={title}
        />
      </ImageModal>
      <div {...props}>
        <Col xs={12} md={6}>
          <img
            className="img-fluid image-shadow"
            loading="lazy"
            src={
              "https://res.cloudinary.com/duicqd6cu/image/upload/v1715827025/" +
              img
            }
            alt={title}
            onClick={handleOpenClick}
          />
        </Col>
        <Col xs={12} md={6} className="text-start p-4">
          <h2 className="featurette-heading fw-bold lh-1">{title}</h2>
          <p className="lead description-text">{description}</p>
          {/* {link && <a href={link}>Read more...</a>} */}
        </Col>
      </div>
    </>
  );
}
