import "@/styles/globals.css";
import 'react-quill/dist/quill.snow.css';

import type { AppProps } from "next/app";
import { ToasterProvider } from "@/context/toaster";
import { SessionProvider } from "next-auth/react";
import { WindowProvider } from "@/context/window";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ToasterProvider>
        <WindowProvider>
          <Component {...pageProps} />;
        </WindowProvider>
      </ToasterProvider>
    </SessionProvider>
  )
}