import { useContext } from "react";
import { contexto } from "../../context/contextForm";
// import { educacion } from '../../datos/informacion'

export default function VistaEdu() {
  const { textoBody, educacion, eliminarEdu } = useContext(contexto);

  

  return (
    <div className="crear-div-educacion">
      {educacion ? (
        <div className="flex flex-col">
          <h1 className="crear-titulo-general">Educación</h1>
        </div>
      ) : null}
      {educacion
        ? educacion.map((educ, i) => {
            return (
              <div key={i} className="crear-body-educacion">
                <div className="flex justify-between align-items-end">
                  <h1 className="crear-educ-instituto">{educ.instituto}</h1>
                  <div>
                    <h1 className="crear-educ-fecha">
                      {educ.fechaIngreso} / {educ.fechaEgreso}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h1 className="crear-educ-titulo">» {educ.tituloRecibido}</h1>
                        <h1 className="crear-educ-descripcion">{educ.descripcion}</h1>
                    </div>
                    <button onClick={eliminarEdu}>eliminar</button>
                </div>
              </div>
            );
          })
        : null}
      {educacion ? (
        <div
          className="crear-linea"
          style={{
            background: textoBody,
            width: "100%",
            marginTop: "5px",
            opacity: "0.3",
          }}
        ></div>
      ) : null}
    </div>
  );
}
