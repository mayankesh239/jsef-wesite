import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import HomeComp from '../components/home/index'
// import Introduction from '../components/Introduction/index'
import Footer from '../components/footer'
import Stats from '../components/prev_year_stats/index'
import Events from '../components/events/index'
import Gallery from "../components/Gallery/index"
import Sponsors from "../components/sponsors/index"
import Navbar from "../components/navbar/index"
import Faq from '../components/faq'

import { ColorModeScript } from '@chakra-ui/react'
import theme from './api/theme'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JSEF '22</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <main className={styles.main}>
        <Navbar />
        <HomeComp />
        {/* <Introduction /> */}
        <Stats />
        <Events />
        <Gallery />
        {/* <Sponsors /> */}
        <Faq/>
        <Footer />
      </main>

    </div>
  )
}

export default Home
