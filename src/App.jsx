// import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./SinglePage";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<SinglePage />} />
        <Route path="/" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
