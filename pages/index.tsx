import type { NextPage } from "next";
import Head from "next/head";
import Cover from "../components/Cover";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const recipient = router.query.to;
  if (recipient) {
    localStorage.setItem("recipient", recipient + "");
  }

  return (
    <div>
      <Head>
        <title>Nita & Amin Wedding</title>
        <meta
          name="description"
          content="E-Invitation for Nita & Amin Wedding"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="cover bg-soft-lilac">
          <Cover name={recipient} />
        </div>
      </main>
    </div>
  );
};

export default Home;
