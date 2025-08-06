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
          <p>Телефон: <a href="tel:+79001234567">+7 (900) 123-45-67</a></p>
          <p>Email: <a href="mailto:info@uyutnoe-morye.ru">info@uyutnoe-morye.ru</a></p>
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
