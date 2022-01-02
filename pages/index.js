import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
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
          <Script async strategy="beforeInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-10821860041"/>
        <Script strategy="beforeInteractive"> 
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10821860041');
            gtag('config', 'AW-10821860041/QqIaCIj4ko0DEMn1oago', {
              'phone_conversion_number': '(469) 850-2170'
            });
          `}
        </Script>
        </Head>
        <Main/>
        <Script strategy="afterInteractive">
          {`
            window.addEventListener('load', function(){
              if(window.location.pathname == '/'){
                gtag('event', 'conversion', {'send_to': 'AW-10821860041/Iq-pCKvH6YwDEMn1oago'});
              }
            });
          `}
        </Script>
      </div>
  )
}

