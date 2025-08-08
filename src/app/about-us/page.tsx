import styles from "./style.module.css"

export default function AboutUs(){
    return(
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Информация об организации</h1>
    
          <div className={styles.card}>
            <h2>Полное наименование</h2>
            <p>
              Индивидуальный предприниматель <br />
              Пономаренко Джульетта Вагановна
            </p>
          </div>
    
          <div className={styles.card}>
            <h2>Основание деятельности</h2>
            <p>
              Действует на основании Свидетельства о регистрации физического лица в
              качестве индивидуального предпринимателя, серия 23 № 007644683, выданного 20
              мая 2009 г. в ИФНС по г.&nbsp;к.&nbsp;Анапа, Краснодарского края.
            </p>
          </div>
    
          <div className={styles.card}>
            <h2>Краткое наименование</h2>
            <p>ИП Пономаренко Джульетта Вагановна</p>
          </div>
    
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <h2>ИНН</h2>
              <p>230110914178</p>
            </div>
            <div className={styles.card}>
              <h2>ОГРНИП</h2>
              <p>309230114000050</p>
            </div>
          </div>
    
          <div className={styles.cardHighlight}>
            <h2>Стоимость проживания</h2>
            <p>1000 руб. / сутки с человека</p>
          </div>
        </div>
    )
}