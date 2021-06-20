import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Main from './main'
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
        <Main/>
      </div>
  )
}

