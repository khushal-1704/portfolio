import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {

  // console.log(screen.width);
  return (
    <div className={styles.container}>
      <Head>
        <title>KhushalKumarSain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.containerBody}>
        <div className={styles.top} data-aos='zoom-in' data-delay=''>
          <span >Hi</span>
          <span >, i'm</span>
        </div>
        <div className={styles.main} data-aos='zoom-in' data-aos-delay="500">
          <span>Khushal Kumar Sain</span>
        </div>
        <div className={styles.bottom} data-aos='zoom-in' data-aos-delay="1000">
          <span>and i'm a<span className={styles.bottomMain} > FRONTEND DEVELOPER </span>.</span>
        </div>
      </main>

    </div>
  )
}


//#abc4ff
//#c1d3fe