import React from 'react'
import Footer from './Footer'
import MiddleSection from './MiddleSection'
import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.main}>
            <MiddleSection />
            <Footer/>
        </div>
    )
}

export default About
