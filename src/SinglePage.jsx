import { lazy, Suspense } from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import ScrollToTop from "react-scroll-to-top";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Extra = lazy(() => import("./components/Extra/Extra"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

export default function SinglePage() {
  return (
    <>
      <div id="container">
        <div id="left" className="container-left">
          <SideNav />
        </div>
        <div id="right" className="p-5">
          <Suspense fallback={<Loading />}>
            <Home />
            <hr className="sub-border" />
            <About />
            <hr className="sub-border" />
            <Resume />
            <hr className="sub-border" />
            <Portfolio />
            <hr className="sub-border" />
            <Extra />
            <hr className="sub-border" />
            <Contact />
            <hr className="sub-border" />
            <Footer />
            <ScrollToTop
              smooth
              viewBox="0 0 16 16"
              svgPath="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}
