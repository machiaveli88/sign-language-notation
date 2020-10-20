import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
