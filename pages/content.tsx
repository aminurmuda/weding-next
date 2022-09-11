import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Layout from "../components/Page";
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
  const [currentPage, setCurrentPage] = useState("home");
  const pages = [
    {
      label: "Home",
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

  const handleSetCurrentPage = (value: string) => {
    setCurrentPage(value);
    if (value === "wishes") {
      value = "penutup";
    }
    const item = document.getElementById("navbar-item-" + value);
    if (item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    const getPage = pages.find((item) => item.value === currentPage);
    getPage && setPage(getPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

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
        <div>
          <div className="container">
            <Layout page={page}>{page.content}</Layout>
          </div>
          <SendMessage
            hide={currentPage === "wishes"}
            goTo={handleSetCurrentPage}
          />
          <Navbar
            menus={pages}
            currentPage={currentPage}
            setCurrentPage={handleSetCurrentPage}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
