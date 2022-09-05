import type { NextPage } from "next";
import Head from "next/head";
import Cover from "../components/Cover";

const Home: NextPage = () => {
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
          <Cover />
        </div>
      </main>
    </div>
  );
};

export default Home;
