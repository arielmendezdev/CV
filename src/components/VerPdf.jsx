import { Document, Page, View, Text } from "@react-pdf/renderer";

export default function VerPdf({ info, colorColumna, colorBody, textoColumna, textoBody }) {
  return info ? (
      <Document>
        <Page>
          <View
            style={{
              width: "100%",
              margin: "0 25px",
              height: "100vh",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              position: "relative",
            }}
          >
            <View
              style={{
                backgroundColor: colorColumna,
                color: textoColumna,
                position: "absolute",
                top: "0",
                left: "-25",
                height: "100vh",
                width: "30%",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  display: "flex",
                  margin: "50px 15px",
                  width: "150px",
                  height: "150px",
                  border: "1px solid #ffffff",
                  borderRadius: "50%",
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
                  {info.nombre}
                </Text>
                <Text
                  style={{
                    display: "block",
                    fontSize: "20px",
                  }}
                >
                  {info.apellido}
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: colorBody,
                color: textoBody,
                position: "absolute",
                top: "0",
                left: "152px",
                height: "100vh",
                width: "72%",
              }}
            >
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info.telefono}
              </Text>
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info.direccion}
              </Text>
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info.dni}
              </Text>
              <Text
                style={{
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {info.localidad}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
  ) : null;
}
