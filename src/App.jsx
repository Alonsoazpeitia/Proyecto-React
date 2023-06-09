//import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//componentes
import Nav from "./components/Nav/Nav.jsx";
//import ListaProductos from "./components/ListaProductos/ListaProductos.jsx"
//paginas
import InicioPage from "./pages/InicioPage.jsx";
import LoNuevoPage from "./pages/LoNuevoPage.jsx";
import NosotrosPage from "./pages/NosotrosPage.jsx";
import OfertasPage from "./pages/OfertasPage.jsx";
import CategoriaPage from "./pages/CategoriaPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DetailPage from "./pages/detailPage/DetailPage.jsx";
import Header from "./components/Header/Header.jsx";
import Carrusel from "./components/Carrusel/Carrusel.jsx"



const App = () => {
  return (
    <Router>
    <Carrusel />
    <Header />
    <Nav/>
      <div className="App">
        <Routes>
          <Route path="/" element={<InicioPage />}/>
          <Route path="/loNuevo" element={<LoNuevoPage />}/>
          <Route path="/ofertas" element={<OfertasPage />}/>
          <Route path="/categorias" element={<CategoriaPage />}/>
          <Route path="/nosotros" element={<NosotrosPage />}/>
          <Route path="/*" element={<ErrorPage />}/>
          <Route path="/detailPage/:id" element={<DetailPage />}/>
        </Routes>
      </div>
    </Router>
    
  );
};

export default App
