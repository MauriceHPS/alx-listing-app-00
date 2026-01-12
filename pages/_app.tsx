import Layout from "@/components/layout/Layout";
import { AppProps } from "next/app";
import React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
