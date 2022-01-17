import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Footer from '../components/footer'
import Navbar from "../components/navbar/index"
import LuckyBrainiacs from '../components/LuckyBrainiacs/index'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <main className={styles.main}>
                <Navbar />
                <LuckyBrainiacs />
                <Footer />
            </main>

        </div>
    )
}

export default Home