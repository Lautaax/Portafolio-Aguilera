import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/NavBar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Presentacion } from "./components/NavBar/Presentacion";
import "./components/NavBar/Presentacion.css";
import { Footer } from "./components/Footer/Footer";
import "./components/Footer/Footer.css";
import { Jobs } from "./components/Jobs/Jobs";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="fondo">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Presentacion greeting="Bienvenidos a SoyLautaa" />}
          />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
