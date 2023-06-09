//import ".styles.css";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="Navigation">
            <ul className="List-ul">
                <Link to="/">Inicio</Link>
                <Link to="/loNuevo">Lo Nuevo</Link>
                <Link to="ofertas">Ofertas</Link>
                <Link to="categorias">Categorias</Link>
                <Link to="nosotros">Acerca de Nosotros</Link>
            </ul>
        </nav>
    )
}

export default Nav;