import React from 'react'
import styles from './about.module.css'

const Footer = () => {
    return (
        <div className={styles.mainFooterDiv}>
            <div>
                <div className={styles.logoDiv}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/2560px-Pinterest_Logo.svg.png" alt="logo" />
                </div>
                <div className={styles.selectDiv}>
                    <select className={styles.language}>
                        <option value="English UK">English UK</option>
                        <option value="English">English</option>
                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                        <option value="Cesky">Cesky</option>
                        <option value="Dansk">Dansk</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Espanol">Espanol</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Portugese">Portugese</option>
                    </select>
                </div>
                <div className={styles.copyright}>
                    <p>© Pinterest 2021</p>
                </div>
            </div>

            <div>
                <div className={styles.aboutUs}>
                    <p>About Us</p>
                    <p>What's Pinterest</p>
                    <p>Our Pinterest Page</p>
                    <p>Engineering blog</p>
                    <p>Brand guidelines</p>
                    <p>Careers</p>
                    <p>Help Center</p>
                    <p>Pinterest Labs</p>
                </div>
                <div className={styles.aboutUs}>
                    <div>
                        <p className={styles.boldText}>Our Policies</p>
                        <p>Copyright & trademark</p>
                        <p>Personalised ads</p>
                        <p>Terms of Service</p>
                        <p>Privacy & cookies</p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.boldText}>More Info</p>
                        <p>For businesses</p>
                        <p>For developers</p>
                        <p>For press</p>
                        <p>For investors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
