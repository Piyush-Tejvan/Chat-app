import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Top from "./components/Top";
import Conversion from "./components/Conversion";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/top' element={ <Top /> } />
          <Route path='/con' element={ <Conversion /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;