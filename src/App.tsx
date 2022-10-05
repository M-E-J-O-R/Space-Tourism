// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import './styles/app.css';
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <div className="App">


        <BrowserRouter>
          {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nav" element={<NavBar/>}/>

          <Route path="contact" element={<About/>}/>
        </Routes> */}
          <NavBar />

        </BrowserRouter>

      </div>

    </>

  );
}

export default App;
