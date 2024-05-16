import { useEffect, useState } from "react";
import "./SideNav.css";
import { linkItems, sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";

export default function SideNav() {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
  };

  // func to determine the active section while scrolling
  const ActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          // Set active link based on section id
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      //Call the function to determine the active section while scrolling
      ActiveSection();
    };
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the comp unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="side-nav-image d-flex flex-column dark-overlay">
      <div
        className="mask position-absolute top-0 end-0 bottom-0 start-0 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      ></div>
      <ul className="nav flex-column align-items-center justify-content-evenly blur p-2 text-uppercase mt-auto fw-bold">
        {linkItems.map((linkItem, i) => (
          <li
            key={i}
            className="nav-item py-sm-0"
            onClick={() => scrollToSection(linkItem.sectionId)}
          >
            <Link
              className={activeLink === linkItem.sectionId ? "active" : ""}
              to="/"
            >
              <i className={linkItem.iconsId} />
              <span className="ms-2 nav-items-side fw-bold nav-items-side">
                {linkItem.sectionId}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
