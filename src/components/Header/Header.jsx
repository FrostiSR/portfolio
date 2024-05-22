import "./Header.css";

export default function Header({ title, subTitle }) {
  return (
    <>
      <div className="outer">
        <p className="head-title top text-uppercase">{title}</p>
        <p className="sub-title below text-center title-text">{subTitle}</p>
      </div>
    </>
  );
}
