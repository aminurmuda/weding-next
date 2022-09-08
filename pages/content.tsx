import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import {
  mdiHomeVariantOutline,
  mdiMapMarkerOutline,
  mdiHeartMultipleOutline,
  mdiCalendarOutline,
  mdiTextBoxOutline,
  mdiLogoutVariant,
  mdiHandsPray,
} from "@mdi/js";
import Opening from "../components/Opening";
import Pengantin from "../components/Pengantin";
import Event from "../components/Event";
import Location from "../components/Location";
import Adab from "../components/Adab";
import Closing from "../components/Closing";
// import Fullscreen from "../components/Fullscreen";
import Page from "../components/Page";
import Greetings from "../components/Greetings";

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState("home");
  // const [isFullscreen, setIsFullscreen] = useState(false);
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
      label: "Penutup",
      value: "penutup",
      icon: mdiLogoutVariant,
      content: <Closing />,
    },
    {
      label: "Ucapan",
      value: "greetings",
      icon: mdiHandsPray,
      content: <Greetings />,
    },
  ];

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
            {pages.map((page, index) => {
              return (
                <Page
                  currentPage={currentPage}
                  page={page}
                  index={index}
                  key={`page-${page.value}`}
                  content={page.content}
                ></Page>
              );
            })}
          </div>
          <Navbar
            menus={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {/* <Fullscreen
            isFullscreen={isFullscreen}
            setIsFullscreen={setIsFullscreen}
          /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
