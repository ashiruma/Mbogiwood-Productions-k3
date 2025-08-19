import '@/styles/globals.css'; // <-- **THIS LINE IS THE FIX**
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
