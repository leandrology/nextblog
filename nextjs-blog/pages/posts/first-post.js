import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Osi osi osige</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log("script loaded correctly, window.FB has been populated")
          }
        />
        <h1> This is my first post.</h1>
        <h1>
          {" "}
          Go back to <Link href="/"> home</Link>{" "}
        </h1>
      </Layout>
    </>
  );
}
