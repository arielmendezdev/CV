import { useContext } from "react";
import { contexto } from "../context/contextForm";
import { Document, Page, View, Text } from "@react-pdf/renderer";

export default function DocuPdf() {

  const { info, colorColumna, colorBody, textoColumna, textoBody } = useContext(contexto);

  return (
    <div>
      <Document>
        <Page size="A4">
          <View
            style={{
              border: "1px solid grey",
              borderRadius: "10px",
              margin: "20px auto",
              width: "50%",
              height: "150vh",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            <View
              style={{
                backgroundColor: colorColumna,
                color: textoColumna,
                borderRadius: "10px 0 0 10px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  margin: "80px auto",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  border: "2px solid",
                }}
              ></View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 10,
                  margin: "20px 0",
                }}
              >
                <Text
                  style={{
                    display: "block",
                    fontSize: "20px",
                  }}
                >
                  {info[0].nombre}
                </Text>
                <Text
                  style={{
                    display: "block",
                    fontSize: "20px",
                  }}
                >
                  {info[0].apellido}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: colorBody,
                color: textoBody,
                borderRadius: "0 10px 10px 0",
                gridColumn: "span 2",
              }}
            >
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info[0].telefono}
              </Text>
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info[0].direccion}
              </Text>
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info[0].dni}
              </Text>
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info[0].localidad}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </div>
  )
}
