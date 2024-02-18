import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Navprofile from "@/components/Navprofile";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <main>
          <Navprofile />
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </>
  );
}
