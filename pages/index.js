import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MainInfo } from './components/main_info'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elizabeth Hardwick</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
      <MainInfo />


      <footer>
        <div className="card-footer w-100">
          Located at: <strong>123 Address St. NE</strong>
          
          <p>
            Next Steps:
            Data from Zillow (Hopefully) on what the team currently has for sale, this will show 
            all of the properties/feature.
         </p>
        </div>
      </footer>
      </main>

    </div>
  )
}
