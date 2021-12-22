import "./css/App.css";
import Welcome from "./components.jsx/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Films from "./components.jsx/Films";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/films" element={<Films />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
