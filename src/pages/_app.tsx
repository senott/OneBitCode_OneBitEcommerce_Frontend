import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './_app.css';
import { persistor, store } from '../store';

toast.configure();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>OneBitGames</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
