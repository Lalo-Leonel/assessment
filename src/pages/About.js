import React from "react";

export default function About() {
  return (
    <div className="About">
      <div>
        <img src="/imagen.jpg" alt="" />
      </div>

      <div className="CardDetail">
        <div>NOMBRE: LALO LEONEL MAMANI CCANAHUIRE</div>
        <div>
          DESCRIPCION: Soy un estudiante egresado de la carrera de Informatica y
          que tiene todas las ganas de aprender el mundo de desarrollo web{" "}
        </div>
        <div>
          3 COSAS QUE APRENDI EN EL PROGRAMA
          <ul>
            <li>Aplicar la metodologia SCRUM: Wireframes y Mockups</li>
            <li>useParams</li>
            <li>axios</li>
          </ul>
        </div>
        <div>CORREO: 155184@unsaac.edu.pe</div>
        <div>
          <a href="https://github.com/Lalo-Leonel/assessment">GitHub</a>
        </div>
      </div>
    </div>
  );
}
