import React from 'react'
import FaqUI from './faq'
import styles from './faq.module.scss'
import { Image } from '@chakra-ui/react'
const Faq = () => {
    return (
        <div className={styles.faq_collection}>
            <Image className={styles.ifr1}
                // boxSize='100px'
                // objectFit='cover'
                src='https://res.cloudinary.com/mayankesh/image/upload/v1643110669/jsef/JSEF-2-min_ihjbca.jpg'
                alt='Dan Abramov'
            />
            {/* <FaqUI /> */}
            <iframe className={styles.ifr}
                src="https://www.youtube.com/embed/73sDcOq8Ss4">
            </iframe>
        </div>
    )
}

export default Faq;
