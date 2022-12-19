import "./App.css";
import Home from "./Home";
import About from "./About";
import Mycard from "./Mycard";
import Mytab from "./Mytab";
import Downloads from "./Downloads";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Home></Home>
      <About />
      <Mycard />
      <Downloads />
      <Mytab />
    </div>
  );
}

export default App;
