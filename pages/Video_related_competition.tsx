import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Footer from '../components/footer'
import Navbar from "../components/navbar/index"
import Video_Exhibition from '../components/Video_Exhibition/index'
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Navbar />
                <Video_Exhibition />
                <Footer />
            </main>

        </div>
    )
}

export default Home