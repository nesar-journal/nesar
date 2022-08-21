import type { AppProps } from 'next/app';

import '../styles/vendor/normalize.css';
import '../styles/variables.scss';
import '../styles/fonts.scss';
import '../styles/globals.scss';
import '../styles/tei.scss';


function App ({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default App;
