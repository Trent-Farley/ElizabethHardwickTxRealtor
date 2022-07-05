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
        <Script strategy='afterInteractive'>
          {
            `
            function (h,b) { var w = window, d = document, s = 'script', x, y; w['__hb_namespace'] = h; w[h] = w[h] || function () { (w[h].q=w[h].q||[]).push(arguments) }; y = d.createElement(s); x = d.getElementsByTagName(s)[0]; y.async = 1; y.src = b; x.parentNode.insertBefore(y,x) })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js'); Homebot('#homebot_homeowner', '8e0599da0dc5632f9d4815c713938a8ed8ed7b208ed3190b') W
            `
          }
        </Script>
      </footer>
    );
}