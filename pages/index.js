import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  MainInfo  from './components/main_info'
import { Navbar } from 'react-bootstrap'
import  Listings  from './components/current_listings'
import fetch from 'node-fetch'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar bg='dark' expand="dark"/>
      <main className="container">
      <MainInfo />
      <h4 className="text-center">
        Listings
      </h4>
      <Listings/>

      <footer>
        <div className="card-footer w-100">
          Located at: <strong>123 Address St. NE</strong>
        </div>
      </footer>
      </main>

    </div>
  )
}

