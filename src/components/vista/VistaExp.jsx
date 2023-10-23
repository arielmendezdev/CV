import { useContext } from "react";
import { contexto } from "../../context/contextForm";


export default function VistaExp() {

    const { experiencia, eliminarExp } = useContext(contexto);

  return (
    <div className="crear-div-experiencia">
      {experiencia ? (
        <div className="flex flex-col">
          <h1 className="crear-titulo-general">Experiencia</h1>
        </div>
      ) : null}
      {experiencia
        ? experiencia.map((exp, i) => {
            return (
              <div key={i} className="crear-body-experiencia">
                <div className="flex justify-between align-items-end">
                  <h1 className="crear-exp-puesto">» {exp.puesto}</h1>
                  <div>
                    <h1 className="crear-exp-fecha">
                      {exp.fechaInicio} / {exp.fechaSalida}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="crear-exp-descripcion">{exp.descripcion}</h1>
                    <button onClick={eliminarExp}>Eliminar</button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
