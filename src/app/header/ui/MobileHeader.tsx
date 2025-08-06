'use client'

import { useState } from 'react'
import { NavItems } from '../types/navItemsType'
import styles from './style.module.css'
import Link from 'next/link'

interface MobileMenuToggleProps{
    navItems: NavItems
}

export default function MobileMenuToggle({ navItems }: MobileMenuToggleProps){
    const [isMenuOpen, setIsMenuOpen]=useState(false)

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <>
            <button 
                className={styles.menuButton} 
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
                <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
            </button>
            <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
                {navItems.map(item=>(
                    <Link key={item.id} href={item.href} className={styles.navLink} onClick={()=>setIsMenuOpen(false)}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </>
    );
}