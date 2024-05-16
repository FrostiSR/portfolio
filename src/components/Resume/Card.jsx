import "./Card.css";

export default function Card({ date, title, place, techs, description, id }) {
  return (
    <div className="card-custom mb-4" key={id}>
      <div className="card-date mb-2">
        <p>{date}</p>
      </div>
      <p className="fw-bold">{title}</p>
      <p className="card-place">{place}</p>
      <p className="mt-2 description-text">{description}</p>
      <hr className="sub-border" />
      {techs && techs}
    </div>
  );
}
