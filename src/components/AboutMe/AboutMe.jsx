import React from "react";
import "./AboutMe.css";

export const AboutMe = () => {
    return (
        <div className="fondoabout d-flex justify-content-center align-items-center text-center text-white bg-dark">
            <div>
                <h1>Sobre mí</h1>
                <h4>Diseñador web y Desarrollador web freelance </h4>
                <h2>¿Qué servicios ofrezco?</h2>
                <h5>Actualmente diseño, rediseño y programo nuevos proyectos y sitios web.</h5>
                <h2>Con que idiomas trabajo?</h2>
                <h5>HTML, JavaScript y React.js</h5>
                <h2>Herramientas de desarrollo:</h2>
                <p>Github</p>
                <p>Vercel</p>
                <p>Bootstrap</p>
                <p>Figma</p>
            </div>
        </div>
    );
};
