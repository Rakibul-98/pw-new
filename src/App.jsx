import { useState, useEffect, useRef, useMemo } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Banner from "./Sections/Banner/Banner";
import Skills from "./Sections/Skills/Skills";
import Specialty from "./Sections/Specialty/Specialty";
import FeaturedProject from "./Sections/FeaturedProject/FeaturedProject";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Services from "./Sections/Services/Services";
import Blogs from "./Sections/Blogs/Blogs";
import Achievement from "./Sections/Achievement/Achievement";
import Contact from "./Sections/Contact/Contact";
import Navbar from "./Sections/NavBar/Navbar";
import { MdEngineering, MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaBloggerB, FaTools } from "react-icons/fa";
import { HiOutlineBadgeCheck, HiOutlineCollection } from "react-icons/hi";
import { GiLaptop, GiMedal } from "react-icons/gi";
import { RiContactsLine } from "react-icons/ri";
import ThemeBtn from "./Sections/ThemeBtn/ThemeBtn";

export default function App() {
  const sections = useMemo(() => [
    { id: "Banner", icon: <MdOutlineFeaturedPlayList />, component: <Banner /> },
    { id: "Specialty", icon: <HiOutlineBadgeCheck />, component: <Specialty /> },
    { id: "Skills", icon: <FaTools />, component: <Skills /> },
    { id: "FeaturedProject", icon: <GiLaptop />, component: <FeaturedProject /> },
    { id: "Portfolio", icon: <HiOutlineCollection />, component: <Portfolio /> },
    { id: "Services", icon: <MdEngineering />, component: <Services /> },
    { id: "Blogs", icon: <FaBloggerB />, component: <Blogs /> },
    { id: "Achievement", icon: <GiMedal />, component: <Achievement /> },
    { id: "Contact", icon: <RiContactsLine />, component: <Contact /> },
  ], []);

  const [currentSection, setCurrentSection] = useState(sections[0].id);
  const sectionRefs = useRef([]);

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("themeMode");
    // return savedTheme === 'true';
    return savedTheme === 'true' ? true : true;
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setCurrentSection(sections[index].id);
        }
      });
    }, options);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections]);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div data-theme={isDark ? "dark" : "cupcake"} className="relative">
      <ThemeBtn isDark={isDark} setIsDark={setIsDark} />
      <Navbar currentSection={currentSection} sections={sections} onSectionChange={handleSectionChange} />
      <ReactFullpage
        scrollingSpeed={1000}
        render={() => (
          <ReactFullpage.Wrapper>
            {sections.map((section, index) => (
              <div
                key={index}
                className="section"
                id={section.id}
                ref={el => sectionRefs.current[index] = el}
              >
                {section.component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
