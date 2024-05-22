import { Typewriter } from "react-simple-typewriter";

export default function HomeContent() {
  return (
    <>
      <h1 className="fw-bold title-text">
        Hi, I'm <span className="span-text">Daniël dos Ramos</span> .
      </h1>
      <p className="type-title title-text">
        I'm a&nbsp;
        <span>
          <Typewriter
            words={["FullStack Developer", "Graphic Designer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
      <p className="loc-text description-text">Based in Paramaribo, Suriname</p>
    </>
  );
}
