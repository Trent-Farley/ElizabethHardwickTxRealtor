import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elizabeth Hardwick</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
      <div className="row pt-lg-4">
        <div className = "col-sm-3 shadow-lg bg-dark">
          <Card className={styles.main, "shadow-lg", "p-3"}>
            <div className={"card-img"}>
              <Image height="200%" width="200%" src="/images/main_photo.jpg" alt="Elizabeth Hardwick"/>
            </div>
          </Card>
          </div>
          <div className = "col shadow-lg " >
            <Card>
              <h2 className="card-title border-bottom">
                About me
              </h2>
              <p className="card-text"> 
                As a RE/MAX® agent, I’m dedicated to helping my clients find the home of their dreams. Whether you are buying or selling a home or just curious about the local market, I would love to offer my support and services. I know the local community — both as an agent and a neighbor — and can help guide you through the nuances of our local market. With access to top listings, a worldwide network, exceptional marketing strategies and cutting-edge technology, I work hard to make your real estate experience memorable and enjoyable.
                I look forward to the opportunity to work with you. Please don’t hesitate to contact me today!
              </p>
              <div className="card-footer">
                <div className="btn-group">
                  <button className="btn btn-outline-primary">Social Media 1</button>
                  <button className="btn btn-outline-success">Social Media 2</button>
                  <button className="btn btn-outline-dark">555-555-5555</button>
                </div>
              </div>
            </Card>
          </div>

      </div>

      </main>
      <footer className={styles.footer}>
        <div className="card-footer w-100">
          Located at: <strong>123 Address St. NE</strong>
          
          <p>
        Next Steps:
        Data from Zillow (Hopefully) on what the team currently has for sale, this will show 
        all of the properties/feature.
         </p>
        </div>
      </footer>
    </div>
  )
}
