import { useContext } from "react";
import { contexto } from "../context/contextForm";
import { useNavigate } from "react-router-dom";
import "../assets/css/VistaColumna.css";
import "../assets/css/VistaBody.css";
import VistaInfo from "./vista/VistaInfo";
import VistaHab from "./vista/VistaHab";
import VistaPerfil from "./vista/VistaPerfil";
import VistaEdu from "./vista/VistaEdu";
import VistaExp from "./vista/VistaExp";
import VistaImagen from "./vista/vISTAiMAGEN.JSX";

export default function Vista() {
  const navigate = useNavigate();

  const { colorColumna, colorBody, textoColumna, textoBody } =
    useContext(contexto);

  return (
    <div>
      <div className="crear-vista-general">
        {/* VISTA DE LA COLUMNA */}
        <div
          className="crear-vista-columna"
          style={{
            backgroundColor: colorColumna,
            color: textoColumna,
          }}
        >
          <VistaImagen />
          <VistaInfo />
          <VistaHab />
        </div>

        {/* VISTA DEL BODY */}
        <div
          className="crear-pdf-body"
          style={{
            backgroundColor: colorBody,
            color: textoBody,
            gridColumn: "span 2",
          }}
        >
          <VistaPerfil />
          <VistaEdu />
          <VistaExp />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Ver PDF
        </button>
      </div>
    </div>
  );
}
