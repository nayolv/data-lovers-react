import "./css/App.css";
//import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Films from "./components/Films";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Films />} />
          {/* <Route exact path="/films" element={<Films />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
