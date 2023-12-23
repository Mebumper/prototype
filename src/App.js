import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from "react";
import Home from './pages/Home';
import Welcome from "./pages/Welcome";
import Stage_1 from "./pages/Stage_1";
import Stage_2 from "./pages/Stage_2"
import Stage_3 from "./pages/Stage_3";
import Transisi_1 from "./pages/Transisi_1";
import Transisi_2 from "./pages/Transisi_2";
import Finished from "./pages/Finished";

function App() {
    return (
      <Router>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/Welcome' element={<Welcome />} />
          <Route path ='/Stage_1' element={<Stage_1 />} />
          <Route path ='/Stage_2_unlock' element={<Transisi_1 />} />
          <Route path ='/Stage_2' element={<Stage_2 />} />
          <Route path ='/Stage_3_unlock' element={<Transisi_2 />} />
          <Route path ='/Stage_3' element={<Stage_3 />} />
          <Route path ='/Finished' element={<Finished />} />

        </Routes>
      </Router>
    );
}
export default App;
