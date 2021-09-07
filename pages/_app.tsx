import type { AppProps } from "next/app";
import LayoutComponent from "../components";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
export default MyApp;
