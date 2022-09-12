import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LoginButton from "../components/LoginButton";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const recipient = router.query.to;
  const isEligible = !!recipient;
  return (
    <div>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to Admin page" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="cover bg-soft-lilac">
          <div className="center fullheight">
            <div>
              <p className="font-size-2 slide-up">The Wedding of</p>
              <div className="mt-2 mb-2 shine scale-up">Nita & Amin</div>
              {isEligible ? (
                <div>
                  <p className="font-size-1 slide-down">Kepada Yth.</p>
                  <p className="font-size-2 mt-1 bold fade-in">{recipient}</p>
                  <p className="font-size-1 slide-down">di Tempat</p>
                  <Link href="/content">
                    <button className="action-button mt-2 slide-down">
                      Buka Undangan
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="mt-2">
                  <LoginButton />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
