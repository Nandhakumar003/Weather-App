import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";

import WeatherByLatLon from "../components/WeatherByLatLon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/bylat&lon" element={<WeatherByLatLon />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
