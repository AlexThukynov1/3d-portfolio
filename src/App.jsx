import {BrowserRouter} from "react-router-dom";
import Navbar from "./componetns/Navbar.jsx";
import Hero from "./sections/Hero/index.jsx";
import About from "./sections/About/index.jsx";
import Experience from "./sections/Experience/index.jsx";
import Tech from "./componetns/Tech.jsx";
import Index from "./sections/Works/index.jsx";
import Feedback from "./sections/Feedback/index.jsx";
import Contact from "./sections/Contact/index.jsx";
import StarsCanvas from "./componetns/StarsCanvas.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
          <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repat bg-center">
                  <Navbar/>
                  <Hero/>
              </div>
              <About />
              <Experience/>
              <Tech/>
              <Index/>
              <Feedback/>
              <div className="relatie z-0">
                  <Contact/>
                  <StarsCanvas/>
              </div>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App
