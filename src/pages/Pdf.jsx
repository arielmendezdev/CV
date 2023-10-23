import { useContext } from "react";
import { contexto } from "../context/contextForm";
import { useState, useEffect } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import VerPdf from "../components/VerPdf";

export default function Pdf() {
  const [info, setInfo] = useState([{}]);

  const { informacion, colorColumna, colorBody, textoColumna, textoBody } =
    useContext(contexto);

  useEffect(() => {
    setInfo(informacion[0]);
  }, []);

  // const Button = () => {
  //   return (
  //     <PDFDownloadLink
  //       document={
  //         <VerPdf
  //           info={info}
  //         />
  //       }
  //       fileName="cv.pdf"
  //     >
  //       <button onClick={() => {}} className="btn btn-primary">
  //         DownloadPDF
  //       </button>
  //     </PDFDownloadLink>
  //   );
  // };

  return (
    <div style={{ minHeight: "100vh" }}>
      {info ? (
        <>
          <PDFViewer
            style={{
              width: "100%",
              height: "100vh",
            }}
          >
            <VerPdf
              info={info}
              colorColumna={colorColumna}
              colorBody={colorBody}
              textoColumna={textoColumna}
              textoBody={textoBody}
            />
          </PDFViewer>
        </>
      ) : null}
      {/* <div className="w-screen text-center mt-4">
        <Button />
      </div> */}
    </div>

  );
}
