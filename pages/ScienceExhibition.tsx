import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Footer from '../components/footer'
import Navbar from "../components/navbar/index"
import ScienceExhibition from '../components/ScienceExhibition/index'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Navbar />
                <ScienceExhibition />
                <Footer />
            </main>

        </div>
    )
}

export default Home