import About from "./components/about/About";
import Create from "./components/create/Create";
import Education from "./components/educations/Education";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Create/>
      <Education/>

    </>
  );
}

export default App;
