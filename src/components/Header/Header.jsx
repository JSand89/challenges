import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.Header}>
            
            <div className={styles.logo}>
                <img src='https://i.ibb.co/P1QWcjq/Logo.png' alt='Logo'></img>
            </div>
            <h1 className={styles.title}>50 dias 50 retos</h1>
            
        </div>
    )
}

export default Header
