
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/index.jsx";
import Quiz from "./pages/Quiz/index.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Quiz /> } /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

