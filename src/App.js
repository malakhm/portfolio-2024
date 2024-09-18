import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Steps from "./Pages/Steps";

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
    </div>
    </BrowserRouter>

  );
}

export default App;
