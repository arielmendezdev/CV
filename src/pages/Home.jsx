import PDFGenerator from "../components/PDFGenerator"

export default function Home() {
  return ( 
    <div className="flex justify-center flex-col text-center mt-52 gap-10">
      {/* <PDFGenerator/> */}
      <p className="text-4xl">Bienvenidos!!!</p>
      <p className="text-xl">Con esta app podrás crear tu CV y descargarlo en formato pdf para poder enviarlo posteriormente.</p>
    </div>
  )
}