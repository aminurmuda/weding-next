import type { NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";
import Forward from "../components/Forward";

const Home: NextPage = () => {
  const router = useRouter();
  const recipient = router.query.to;

  return (
    <div>
      <Head>
        <title>Forward Invitation | Nita & Amin Wedding</title>
        <meta
          name="description"
          content="Quick link to forward invitation via website"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="center bg-soft-lilac">
          <div className="page">
            <Forward />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
