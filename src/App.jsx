import About from "./components/about/About";
import Awards from "./components/award/Awards";
import Blog from "./components/blog/Blog";
import Create from "./components/create/Create";
import Education from "./components/educations/Education";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Create/>
      <Education/>
      <Work/>
      <Portfolio/>
      <Awards/>
      <Blog/>

    </>
  );
}

export default App;
