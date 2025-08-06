import Link from 'next/link'
import styles from './style.module.css'

export function AboutSection(){
    return(
        <section className={styles.section} id="about-hotel">
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <h2 className={styles.title}>О гостинице</h2>
                    <p className={styles.description}>
                        Гостиница &quot;Уютное море&quot; расположена по адресу: <span className={styles.highlight}>г. Анапа, ул. Магнолии, д. 21/2</span> — в тихом и уютном районе, в шаговой доступности от моря и основных достопримечательностей Анапы. Мы открыты круглый год и рады принимать гостей всех возрастов: от семей с детьми до бизнес-туристов.
                    </p>
                    <p className={styles.description}>
                        Наша гостиница предлагает <span className={styles.highlight}>12 комфортабельных номеров</span>, чистоту, порядок и высокий уровень сервиса. Приятный персонал всегда готов помочь вам в организации отдыха и ответить на все ваши вопросы.
                    </p>
                    <Link href="/booking" className={styles.button}>
                        Бронировать номер
                    </Link>
                </div>
            </div>
        </section>
    );
}