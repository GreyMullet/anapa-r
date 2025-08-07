import styles from "./style.module.css"

export const Footer=()=>{
  return(
    <footer className={styles.footer} id="contacts">
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <h3 className={styles.title}>Гостиница «Уютное море»</h3>
          <p className={styles.address}>г. Анапа, ул. Магнолии, д. 21/2</p>
        </div>

        <div className={styles.infoBlock}>
          <h4 className={styles.subtitle}>Контакты</h4>
          <p>Телефон: <a href="tel:+79184313521">+7 (918) 431-35-21</a></p>
          <p>Email: <a href="mailto:4313521@mail.ru">4313521@mail.ru</a></p>
        </div>

        <div className={styles.infoBlock}>
          <h4 className={styles.subtitle}>Часы работы</h4>
          <p>09:00 — 21:00</p>
          <small className={styles.note}>* режим может отличаться в праздничные дни</small>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2025 Гостиница «Уютное море»
      </div>
    </footer>
  )
}
