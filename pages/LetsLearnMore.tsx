import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Footer from '../components/footer'
import Navbar from "../components/navbar/index"
import LetsLearnMore from '../components/LetsLearnMore/index'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './api/theme'
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <main className={styles.main}>
                <Navbar />
                <LetsLearnMore />
                <Footer />
            </main>

        </div>
    )
}

export default Home