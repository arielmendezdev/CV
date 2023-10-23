import { useContext } from "react";
import { contexto } from "../../context/contextForm";

export default function VistaHab() {
  const { habilidades } = useContext(contexto);

  return habilidades.length > 0 ? (
    <div className="crear-div-habilidades">
      <h1 className="crear-habilidades">Habilidades</h1>
      {habilidades.map((hab, i) => {
        return (
          <div key={i}>
            {hab.lenguajes ? (
              <div>
                <h1 className="crear-titulo-habilidades">Lenguajes</h1>
                <div className="crear-info-habilidades">
                  <h1>{hab.lenguajes}</h1>
                </div>
              </div>
            ) : null}
            {hab.frameWorks ? (
              <div>
                <h1 className="crear-titulo-habilidades">FrameWorks</h1>
                <div className="crear-info-habilidades">
                  <h1>{hab.frameWorks}</h1>
                </div>
              </div>
            ) : null}
            {hab.librerias ? (
              <div>
                <h1 className="crear-titulo-habilidades">Librerias</h1>
                <div className="crear-info-habilidades">
                  <h1>{hab.librerias}</h1>
                </div>
              </div>
            ) : null}
            {hab.idiomas ? (
              <div>
                <h1 className="crear-titulo-habilidades">Idiomas</h1>
                <div className="crear-info-habilidades">
                  <h1>{hab.idiomas}</h1>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  ) : null;
}
