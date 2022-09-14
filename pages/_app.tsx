import { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.css";
import { handelRightClick } from "../utils/AppUtility";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    function ctrlShiftKey(e: any, keyCode: string) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }
    if (process.env.APP_ENV === "production") {
      document.addEventListener("contextmenu", handelRightClick);
      document.onkeydown = (e: any) => {
        // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
        if (
          e.keyCode === 123 ||
          ctrlShiftKey(e, "I") ||
          ctrlShiftKey(e, "J") ||
          ctrlShiftKey(e, "C") ||
          (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
        )
          return false;
      };
    }

    let scrollTimeout: any;
    addEventListener("scroll", function (e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        console.log("Scroll ended");
      }, 1000);
    });
  });
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-240813515-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-240813515-1');
        `}
      </Script>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
