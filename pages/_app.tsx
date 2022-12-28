import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {store, persistor} from "../store/store";
import { PersistGate } from 'redux-persist/integration/react';
import "../styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
    <Component {...pageProps} />
    </PersistGate>
  </Provider>
}
