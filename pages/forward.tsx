import type { NextPage } from "next";
import { getSession } from "next-auth/react";
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
          <div className="page" style={{ minHeight: "100vh" }}>
            <Forward />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/admin" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session ? JSON.parse(JSON.stringify(session.user)) : null,
    },
  };
}
