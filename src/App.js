import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Steps from "./Pages/Steps";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App" >

        <Header/>

      <Home/>
      <About/>
      <Services/>
    <Projects/>
<Steps/>
<Contact/>
    </div>
    </BrowserRouter>

  );
}

export default App;
