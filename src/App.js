import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Presentacion } from "./components/NavBar/Presentacion";
import { Footer } from "./components/Footer/Footer";
import { Jobs } from "./components/Jobs/Jobs";
import { Contact } from "./components/Contact/Contact";
import { AboutMe } from "./components/AboutMe/AboutMe";

const TITLE = 'My Page Title';

function App() {
  return (
    <div className="fondo">
      <title>{ TITLE }</title>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Presentacion greeting="Bienvenidos a SoyLautaa" />}
          />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
