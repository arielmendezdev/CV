import { useContext } from "react";
import { contexto } from "../../context/contextForm";

export default function VistaInfo() {
  const { informacion } = useContext(contexto);

  return (
    <div className="crear-div-informacion">
      {informacion[0].nombre ? (
        <div>
          <div className="crear-pdf-container-nombre">
            <h1>
              {informacion[0].nombre} {informacion[0].apellido}
            </h1>
          </div>
          <div className="crear-pdf-container-info">
            {informacion[0].telefono ? (
              <h1 className="crear-pdf-text crear-pdf-text-info">
                <b>Tel:</b> {informacion[0].telefono}
              </h1>
            ) : null}
            {informacion[0].pais ? (
              <h1 className="crear-pdf-text crear-pdf-text-info">
                <b>Pais:</b> {informacion[0].pais}
              </h1>
            ) : null}
            {informacion[0].provincia ? (
              <h1 className="crear-pdf-text crear-pdf-text-info">
                <b>Provincia:</b> {informacion[0].provincia}
              </h1>
            ) : null}
            {informacion[0].localidad ? (
              <h1 className="crear-pdf-text crear-pdf-text-info">
                <b>Ciudad:</b> {informacion[0].localidad}
              </h1>
            ) : null}
            {informacion[0].cpostal ? (
              <h1 className="crear-pdf-text crear-pdf-text-info">
                <b>CP:</b> {informacion[0].cpostal}
              </h1>
            ) : null}
            {informacion[0].email ? (
              <h1 className="crear-pdf-text crear-pdf-text-info">
                <b>Email:</b> {informacion[0].email}
              </h1>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
