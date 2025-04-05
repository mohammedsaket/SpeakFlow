'use client'

import Script from 'next/script'

export default function GoogleTagManager() {
  return (
    <>
      {/* Google Tag Manager - Script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'startTime':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-WLDZN958XG);
        `}
      </Script>

      {/* Google Tag Manager - NoScript */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=G-WLDZN958XG"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '-9999px',
            width: '0',
            height: '0',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://www.googletagmanager.com/ns.html?id=G-WLDZN958XG"
            alt=""
            width="1"
            height="1"
          />
        </div>
      </noscript>

      {/* Google Tag Manager - DataLayer */}
      <Script id="google-tag-manager-dataLayer" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WLDZN958XG');
        `}
      </Script>
    </>
  )
} 
