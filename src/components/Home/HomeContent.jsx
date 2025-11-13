import { Typewriter } from "react-simple-typewriter";

export default function HomeContent() {
  return (
    <>
      <h1 className="loc-text title-text">
        Hi, I'm <span className="fw-bold">Daniël dos Ramos</span> .
      </h1>
      <p className="type-title title-text">
        I'm a&nbsp;
        <span className="span-text">
          <Typewriter
            words={["Fullstack Developer", "Graphic Designer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
      <p className="loc-text description-text">Based in Rotterdam, Nederland</p>
    </>
  );
}
