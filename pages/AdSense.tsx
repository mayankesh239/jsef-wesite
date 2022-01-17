import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Footer from '../components/footer'
import Navbar from "../components/navbar/index"
import Adscene from '../components/Ad-scene/index'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './api/theme'
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
             <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <main className={styles.main}>
                <Navbar />
                <Adscene />
                <Footer />
            </main>

        </div>
    )
}

export default Home