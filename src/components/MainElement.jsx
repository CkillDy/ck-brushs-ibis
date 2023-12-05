import Card from "./childElements/CardBrush"
import styles from "../styles/styles.module.css"
import { useCallback, useEffect, useState } from "react"
import generateUrlBrush from "./generateBrush"

function Main() {
  const [brushs, setBrush] = useState([])

  useEffect(() => {
    let result = generateUrlBrush()
    setBrush(result)
    return () => {
      console.log("Desmontar elemento")
    }
  }, [])

  const handleDownloadClick = useCallback(async (url, idImg) => {
    console.log(idImg)
    const responsefetch = await fetch(url, { method: "GET" })
    if (responsefetch.ok && responsefetch.status === 200) {
      const imageBinary = await responsefetch.blob()
      const link = URL.createObjectURL(imageBinary)
      const elementAncora = document.createElement("a")
      elementAncora.href = link
      elementAncora.download = idImg
      elementAncora.target = "_self"
      document.body.appendChild(elementAncora)
      elementAncora.click()
      elementAncora.remove()
      URL.revokeObjectURL(link)
    }
  })


  return (
    <main className={styles.container} id="main" role="main">
      {
        brushs.length > 1 ? brushs.map((br, id) => {
          return < Card
            imageUrl={br}
            nameBrush={"Brush InibsPaint"}
            key={id}
            nameImgDownload={"pincel" + id}
            titleDownalod={"Baixar Pincel"}
            handleDownload={handleDownloadClick}
          />
        }) : <div>
          <h2>Nenhum brush foi encontrado :( </h2>
          <p>Tente recarregar a pagina novamente</p>
        </div>
      }

    </main>
  )
}

export default Main