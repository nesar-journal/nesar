import type { AppProps } from 'next/app';

import '../styles/variables.css';
import '../styles/fonts.css';
import '../styles/globals.css';

function App ({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default App;
