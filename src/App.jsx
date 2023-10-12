import About from "./components/about/About";
import Create from "./components/create/Create";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Create/>

    </>
  );
}

export default App;
