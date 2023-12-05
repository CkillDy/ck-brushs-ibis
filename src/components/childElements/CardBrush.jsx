import styles from "../../styles/styles.module.css"

function CardBrush({ nameBrush, imageUrl, nameImgDownload, titleDownalod, handleDownload }) {

  return (
    <figure className={styles.card}>
      <img draggable="false" src={imageUrl} alt={nameImgDownload} />
      <legend>{nameBrush}</legend>
      <button
        type="button"
        title={"Fazer download do " + nameImgDownload}
        onClick={(ev) => {
          ev.preventDefault()
          handleDownload(imageUrl, nameImgDownload)
        }}
      >{titleDownalod}
      </button>

    </figure >

  )
}

export default CardBrush