import FormColor from "../components/formularios/FormColor";
import FormEdu from "../components/formularios/FormEdu";
import FormExp from "../components/formularios/FormExp";
import FormHab from "../components/formularios/FormHab";
import FormInfo from "../components/formularios/FormInfo";
import FormPerfil from "../components/formularios/FormPerfil";
import Vista from "../components/Vista";

export default function CrearCV() {

  return (
    <>
      <div className="">

          <div className="flex gap-4 mx-4">

          <FormInfo />
          <FormHab />
          </div>
          <div className="flex gap-4 mx-4">
            <FormPerfil />
          </div>
          
          <div className="flex gap-4 mx-4">
          <FormEdu />
          <FormExp />
          </div>

          <FormColor />
          <Vista />
          
      </div>
    </>
  );
}
