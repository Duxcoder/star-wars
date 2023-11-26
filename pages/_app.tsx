import { AppProps } from 'next/app';
import Router from 'next/router';
import '../assets/styles.css';
import { Fragment, useEffect, useState } from 'react';
import Sword from '../components/Loader/Sword';
export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return <Fragment>{loading ? <Sword /> : <Component {...pageProps} />}</Fragment>;
}
