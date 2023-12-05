import styles from "../styles/styles.module.css"

function Header() {
  return (
    <header className={styles.header} id="header" role="heading">
      <section className={styles.headerGroup}>
        <h1 className={styles.title}>CkillDy Brushs</h1>
        <p>Conheça alguns dos meus principais pinceis usados no  appIbisPaintX ;)</p>
        <button type="button">
          <a 
          style={{
            alignItems: "center",
            textDecoration: "none",
          }}
          href="https://www.instagram.com/ckilldy/">Me Conheça melhor</a>
        </button>
      </section>
    </header>
  )
}

export default Header