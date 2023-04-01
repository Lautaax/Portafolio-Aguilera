import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className=" d-flex w-50 h-50 mx-auto flex-column"
    >
    <div>

        <div className="menuu">
            <ul className="mennu">
                <li className="item"><Link to="/" className="nav-link" >Inicio</Link></li>
                <li className="item"><Link to="/Jobs/" className="nav-link">Trabajos</Link></li>
                <li className="item"><Link to="/AboutMe/" className="nav-link">AboutMe</Link></li>
                <li className="item"><Link to="/Contact/" className="nav-link">Contacto</Link></li>
            </ul>
        </div>
    </div>

</div>
  )
}

