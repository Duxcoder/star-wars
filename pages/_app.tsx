import { AppProps } from 'next/app';
import '../assets/styles.css';
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
