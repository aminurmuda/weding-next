import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Layout from "../components/Page";
import Heart from "../components/Heart";
import {
  mdiHomeVariantOutline,
  mdiMapMarkerOutline,
  mdiHeartMultipleOutline,
  mdiCalendarOutline,
  mdiTextBoxOutline,
  mdiLogoutVariant,
  mdiHandsPray,
} from "@mdi/js";
import SendMessage from "../components/SendMessage";
import { useRouter } from "next/router";

const Opening = dynamic(() => import("../components/Opening"), {
  ssr: true,
});
const Pengantin = dynamic(() => import("../components/Pengantin"), {
  ssr: true,
});
const Event = dynamic(() => import("../components/Event"), {
  ssr: true,
});
const Location = dynamic(() => import("../components/Location"), {
  ssr: true,
});
const Adab = dynamic(() => import("../components/Adab"), {
  ssr: true,
});
const Closing = dynamic(() => import("../components/Closing"), {
  ssr: true,
});
const Wishes = dynamic(() => import("../components/Wishes"), {
  ssr: true,
});

const Home: NextPage = () => {
  const route = useRouter();
  const queryPage =
    route.query && route.query.page ? route.query.page.toString() : "";
  const [currentPage, setCurrentPage] = useState("home");
  const pages = [
    {
      label: "Pembuka",
      value: "home",
      icon: mdiHomeVariantOutline,
      content: <Opening />,
    },
    {
      label: "Pengantin",
      value: "pengantin",
      icon: mdiHeartMultipleOutline,
      content: <Pengantin />,
    },
    {
      label: "Waktu",
      value: "acara",
      icon: mdiCalendarOutline,
      content: <Event />,
    },
    {
      label: "Lokasi",
      value: "lokasi",
      icon: mdiMapMarkerOutline,
      content: <Location />,
    },
    {
      label: "Adab",
      value: "adab",
      icon: mdiTextBoxOutline,
      content: <Adab />,
    },
    {
      label: "Ucapan",
      value: "wishes",
      icon: mdiHandsPray,
      content: <Wishes />,
    },
    {
      label: "Penutup",
      value: "penutup",
      icon: mdiLogoutVariant,
      content: <Closing />,
    },
  ];

  const [page, setPage] = useState(pages[0]);
  const changeQuery = (value: string) => {
    route.replace(
      {
        pathname: "/content",
        query: { page: value },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleSetCurrentPage = (value: string) => {
    changeQuery(value);
    setCurrentPage(value);
    const getPage = pages.find((item) => item.value === value);
    getPage && setPage(getPage);
    let goTo = value;
    if (goTo === "wishes") {
      goTo = "penutup";
    }
    const item = document.getElementById("navbar-item-" + goTo);
    if (item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    if (queryPage) {
      handleSetCurrentPage(queryPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryPage]);

  return (
    <div>
      <Head>
        <title>{page.label} | Nita & Amin Wedding</title>
        <meta
          name="description"
          content="E-Invitation for Nita & Amin Wedding, build with ❤ by aminurmuda"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="parent background container">
          <div className="children back">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <Heart />
          </div>
          <div className="children front">
            <div className="center fullheight">
              <Layout page={page}>{page.content}</Layout>
            </div>
            <SendMessage hide={currentPage === "wishes"} goTo={changeQuery} />
            <Navbar
              menus={pages}
              currentPage={currentPage}
              setCurrentPage={changeQuery}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
