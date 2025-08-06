import Link from 'next/link'
import styles from './style.module.css'

export function WelcomeSection(){
    return(
        <section className={styles.section}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Добро пожаловать в гостиницу &quot;Уютное море&quot; в Анапе!
                    </h1>
                    <p className={styles.description}>
                        Расположенная по адресу: <span className={styles.highlight}>г. Анапа, ул. Магнолии, д. 21/2</span>, наша гостиница предлагает <span className={styles.highlight}>12 уютных номеров</span>, комфорт и спокойствие для каждого гостя.
                    </p>
                    <p className={styles.description}>
                        Наши номера оснащены: кондиционер, Wi-Fi, телевизор, холодильник.
                    </p>
                    <p className={styles.description}>
                        Приятный персонал, завтрак и близость к пляжу сделают ваш отдых незабываемым.
                    </p>
                    <Link href="/booking" className={styles.button}>
                        Бронировать номер
                    </Link>
                </div>
            </div>
        </section>
    )
}