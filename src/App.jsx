import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import AllContents from "./pages/AllContents.jsx";
import Fsd from "./pages/Fsd.jsx";
import DevOps from "./pages/DevOps.jsx";
import AiAndMl from "./pages/AiAndMl.jsx";
import Career from "./pages/Career.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/all" element={<AllContents />} />
            <Route path="/fsd" element={<Fsd />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/aiandml" element={<AiAndMl />} />
            <Route path="/career" element={<Career />} />
          </Route>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;