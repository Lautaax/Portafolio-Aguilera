import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className="colorfondoo"  >
    <div className=" d-flex w-50 h-50 mx-auto flex-column ">
        <div className="menuu">
            <ul className="mennu">
                <li className="item"><Link to="/" className="nav-link letraNav" >Home</Link></li>
                <li className="item"><Link to="/Jobs/" className="nav-link letraNav">Jobs</Link></li>
                <li className="item"><Link to="/AboutMe/" className="nav-link letraNav">AboutMe</Link></li>
                <li className="item"><Link to="/Contact/" className="nav-link letraNav">Contact</Link></li>
            </ul>
        </div>
        </div>


</div>
  )
}

