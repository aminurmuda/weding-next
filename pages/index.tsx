import type { NextPage } from "next";
import Head from "next/head";
import Cover from "../components/Cover";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const name = router.query.name;

  return (
    <div>
      <Head>
        <title>Nita & Amin Wedding</title>
        <meta
          name="description"
          content="E-Invitation for Nita & Amin Wedding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="cover bg-soft-lilac">
          <Cover name={name} />
        </div>
      </main>
    </div>
  );
};

export default Home;
