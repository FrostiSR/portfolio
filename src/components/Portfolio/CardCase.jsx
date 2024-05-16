import "./CardCase.css";

export default function CardCase({ image, url, alt, title, type }) {
  return (
    <>
      <div>
        <div className="img-container">
          <a href={url} target="_blank">
            <img
              className="img-fluid"
              loading="lazy"
              src={
                "https://res.cloudinary.com/duicqd6cu/image/upload/v1715455361/" +
                image
              }
              alt={alt}
            />
            <div className="image-hover">
              <h4>{title}</h4>
            </div>
          </a>
        </div>
        <h5>{title}</h5>
        <p>{type}</p>
      </div>
    </>
  );
}
