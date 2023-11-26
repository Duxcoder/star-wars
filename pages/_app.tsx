import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Sword from '@components/Loader/Sword';
import '../assets/styles.css';

import Router from 'next/router';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

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
  return <ErrorBoundary>{loading ? <Sword /> : <Component {...pageProps} />}</ErrorBoundary>;
}
