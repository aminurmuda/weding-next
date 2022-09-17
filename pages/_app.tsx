import { useEffect } from "react";
import "../styles/globals.css";
import { handelRightClick } from "../utils/AppUtility";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import ReactGA from "react-ga";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";

  useEffect(() => {
    ReactGA.initialize(googleAnalyticsId);
    if (isProduction) {
      if (window.location.pathname === "/content") {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
    }
  });

  useEffect(() => {
    function ctrlShiftKey(e: any, keyCode: string) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }
    if (isProduction) {
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
  });
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
