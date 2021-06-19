import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  MainInfo  from './components/main_info'
import { Navbar } from 'react-bootstrap'
import  Listings  from './components/current_listings'


import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/font-awesome/css/font-awesome.css'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Find your next home with Elizabeth Hardwick. Get information about current homes on the market as well as contact information to get in touch with Elizabeth. " />
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
        <div className="card-footer text-muted sticky-bottom position-bottom w-100">
          Located at: <strong>RE/MAX Four Corners 7701 W. Eldorado Pkwy, #400 McKinney, TX 75070</strong>
        </div>
      </footer>
      </main>

    </div>
  )
}

