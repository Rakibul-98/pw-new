import ReactFullpage from "@fullpage/react-fullpage";
import Banner from "./Sections/Banner/Banner";
import Skills from "./Sections/Skills/Skills";
import Specialty from "./Sections/Specialty/Specialty";
import FeaturedProject from "./Sections/FeaturedProject/FeaturedProject";
import Portfolio from "./Sections/Prortfolio/Portfolio";
import Services from "./Sections/Services/Services";
import Blogs from "./Sections/Blogs/Blogs";
import Achievement from "./Sections/Achievement/Achievement";
import Contact from "./Sections/Contact/Contact";

export default function App() {
  return (
    <ReactFullpage
    scrollingSpeed = {1000}

    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <Banner />
          <Skills/>
          <Specialty/>
          <FeaturedProject/>
          <Portfolio/>
          <Services/>
          <Blogs/>
          <Achievement/>
          <Contact/>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  )
}
