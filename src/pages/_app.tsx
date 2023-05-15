import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../features/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { AnimatePresence } from 'framer-motion';

const persistor = persistStore(store);

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="mx-auto w-full ">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </PersistGate>
      </Provider>
    </div>
  );
}
