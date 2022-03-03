import Script from 'next/script'

export default function Bottom(){
    return(
        <footer>
        <div className=" container card-footer text-muted sticky-bottom position-bottom w-100">
          Located at: <strong>RE/MAX Four Corners 7701 W. Eldorado Pkwy, #400 McKinney, TX 75070</strong>
        </div>
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            window.addEventListener('load', function(){
              if(window.location.pathname == '/'){
                gtag('event', 'conversion', {'send_to': 'AW-10821860041/Iq-pCKvH6YwDEMn1oago'});
              }
            });
          `}
        </Script>
      </footer>
    );
}