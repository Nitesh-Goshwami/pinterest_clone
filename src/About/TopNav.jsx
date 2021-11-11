import React from 'react'
import styles from './about.module.css'
import logoNav from "./Images/logoNav.png"

const TopNav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.whatsPin}>
                <img src={logoNav} alt="logo" />
                <p>What's Pinterest?</p>
            </div>
            <div className={styles.signupbtn}>
                <p>Signup!</p>
                <p>Blog</p>
                <p>Browser</p>
                <p>Button</p>
                <p>Careers</p>
            </div>
        </div>
    )
}

export default TopNav
