import React from 'react'
import styles from './css/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <span className={styles.language}>EN</span>
                <div className={styles.searchContainer}>
                    <input className={styles.input}/>
                </div>
            </div>
            <div className={styles.center}>Centro</div>
            <div className={styles.right}>Derecho</div>
        </div>
    </div>
  )
}

export default Navbar