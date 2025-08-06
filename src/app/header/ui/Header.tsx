import Link from "next/link";
import { navItems } from "../config/navItems"
import MobileMenuToggle from "./MobileHeader"
import styles from "./style.module.css"

export const Header=()=>{
    return(
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Основная навигация">
                <div className={styles.logo}>
                    <a href="/" className={styles.logoLink}>Уютное море</a>
                </div>
                <div className={styles.navItems}>
                    {navItems.map(item=>(
                        <Link key={item.id} href={item.href} className={styles.navLink}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <MobileMenuToggle navItems={navItems} />
            </nav>
        </header>
    );
}