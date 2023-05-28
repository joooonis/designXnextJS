import type { AppProps } from 'next/app';
import '../styles/globals.css';
import store from '../features/store';
import { persistStore } from 'redux-persist';
import { AnimatePresence } from 'framer-motion';

const persistor = persistStore(store);

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="mx-auto w-full ">
      <AnimatePresence mode="sync">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
