import React from 'react'
import FaqUI from './faq'
import styles from './faq.module.scss'

const Faq = () => {
    return (
        <div>
            <FaqUI />
            <iframe className={styles.faq_collection} 
                src="https://www.youtube.com/embed/73sDcOq8Ss4">
            </iframe>
        </div>
    )
}

export default Faq;
