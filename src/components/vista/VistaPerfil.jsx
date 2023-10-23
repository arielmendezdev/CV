import { useContext } from "react";
import { contexto } from "../../context/contextForm";

export default function VistaPerfil() {
  const { perfil, textoBody } = useContext(contexto);

  return (
    <div>
      {perfil[0] ? (
        <div className="crear-body-perfil">
          <div className="flex flex-col">
            <h1 className="crear-titulo-general">Perfil</h1>
          </div>
          <h1 className="crear-texto-perfil">{perfil[0].descripcion}</h1>
          <div
            className="crear-linea"
            style={{
              background: textoBody,
              width: "100%",
              marginTop: "5px",
              opacity: "0.3",
            }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}
