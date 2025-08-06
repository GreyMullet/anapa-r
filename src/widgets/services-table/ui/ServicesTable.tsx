import { services } from "../config/services"
import styles from "./style.module.css"

export const ServicesTable=()=>{
  return (
    <section className={styles.section} id="services">
      <h2 className={styles.title}>Наши услуги</h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {services.map((service, i)=>(
              <tr key={i} className={i%2===0 ? styles.rowEven : styles.rowOdd}>
                <td className={styles.cell}>{service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.note}>
        Наши сотрудники всегда готовы помочь вам в организации отдыха и сделать ваше пребывание в Анапе по-настоящему комфортным.
      </p>
    </section>
  )
}