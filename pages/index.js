import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MainInfo } from './components/main_info'
import { Navbar } from 'react-bootstrap'
import { useState } from 'react'
import { server } from '../config'
export default function Home() {
  let [state, changeState] = useState({info:0});
  if(state.info == 0){
    getAPI(changeState);
  }
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

        <p>
          {state.info}
        </p>

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

async function getAPI(changeState){
  let req = await fetch(server+"/api/get_listings");
  let res = await req.json();
  changeState({info: res.hello.toString()});
} 
