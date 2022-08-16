import type { AppProps } from 'next/app';

import '../styles/vendor/normalize.css';
import '../styles/variables.css';
import '../styles/fonts.css';
import '../styles/globals.scss';

function App ({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default App;
