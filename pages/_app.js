import "../styles/index.css";
import React, { useEffect } from "react";
import { useRouter, Router } from "next/router";
import { ContextProvider } from "../context/main";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageView = (url, title) => {
    window &&
      window.dataLayer &&
      window.dataLayer.push({
        event: "virtualPageview",
        virtualPageURL: url,
        virtualPageTitle: title,
      });
  };
  useEffect(() => {
    pageView(router.pathname, document.title);
    const handleRouteChange = (url) => {
      pageView(url, document.title);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
