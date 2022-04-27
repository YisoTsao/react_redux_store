import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, newStore } from "../state/index";
import { ModalWrapper } from "../components/ModalWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ModalWrapper />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
