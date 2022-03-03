import {Navbar, Nav} from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function Menu(){
    return(
        <>
         <Head>
          <title>Home</title>
          <meta name="description" content="Find your next home with Elizabeth Hardwick. Get information about current homes on the market as well as contact information to get in touch with Elizabeth. " />
          <link rel="icon" href="/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10821860041"  />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10821860041" />
          <Script strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10821860041');
              gtag('config', 'AW-10821860041/QqIaCIj4ko0DEMn1oago', {
                'phone_conversion_number': '(469) 850-2170'
              });
            `}
          </Script>
          <Script strategy='beforeInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10821860041');
          `}
          </Script>
          <Script strategy='beforeInteractive'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', 'AW-10821860041/QqIaCIj4ko0DEMn1oago', {
                'phone_conversion_number': '(469) 850-2170'
              });
            `}
          </Script>
        </Head>
          <Navbar variant='dark' className="pb-0 mb-0" bg='dark'>
            <Nav className="mr-auto">
              <Nav.Link >
              <Link passHref={true} href="/main"><p> <i className="fa fa-home"></i> Home</p></Link>
              </Nav.Link>
              <Nav.Link >
                <Link passHref={true} href="/search"><p> <i className="fa fa-search"></i> Search</p></Link>
              </Nav.Link>
              <Nav.Link href="https://www.remax.com/real-estate-agents/elizabeth-hardwick-mckinney-tx/100112450"><i className="fa fa-info"></i> More Information</Nav.Link>
            </Nav>
          </Navbar>
        </>
    )
}