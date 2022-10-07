
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import './styles/app.css';

import ErrorPage from "./pages/ErrorPage";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";

import Technology from "./pages/Technology";


function App() {
  return (
    <>
      <div className="App">


        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/technology" element={<Technology />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>


        </BrowserRouter>

      </div>

    </>

  );
}

export default App;
