import { useContext } from "react";
import { contexto } from "../../context/contextForm";
import eliminar from "../../assets/img/eliminar.png";

export default function VistaImagen() {
  const { imagen, setImagen } = useContext(contexto);

  return (
    <div className="crear-div-imagen">
      {imagen ? (
        <div className="crear-vista-imagen">
          <button
            className="crear-vista-btn-eliminar"
            onClick={() => {
              setImagen(null);
            }}
          >
            <img src={eliminar} alt="" className="crear-img-btn-eliminar" />
          </button>
          <img src={imagen} className="crear-imagen-foto" />
        </div>
      ) : null}
    </div>
  );
}
