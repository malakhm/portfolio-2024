import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
        <Header/>
      <Home/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
