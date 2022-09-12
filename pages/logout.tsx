import { signOut } from "next-auth/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  signOut();
  return (
    <>
      <Head>
        <title>Logout</title>
        <meta
          name="description"
          content="Quick link to forward invitation via website"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
