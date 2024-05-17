// import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./SinglePage";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SinglePage />} />
        <Route path="/admin" element={<Redirect />} />
        <Route path="*" element={<SinglePage />} />
      </Routes>
    </>
  );
}

function Redirect() {
  window.location.replace("https://portfolio-cms-green.vercel.app");
}

export default App;
