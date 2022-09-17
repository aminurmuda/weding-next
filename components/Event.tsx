import dynamic from "next/dynamic";
import ReactGA from "react-ga";
import Image from "next/image";

const CountdownComponent = dynamic(() => import("./Countdown"), {
  ssr: false,
});

function Event() {
  const date = new Date("10/22/2022, 10:00:00 AM");
  const targetDate = date.getTime();
  const text = "Acara+Pernikahan+Nita+%26+Amin";
  const dates = "20221022T100000/20221022T140000";
  const details =
    "Resepsi+acara+pernikahan+Nita+%26+Amin%0D%0AGraha+Sofia%2C+Jl.+Otto+Iskandardinata%2C+Karanganyar%2C+Kec.+Subang%2C+Kabupaten+Subang%2C+Jawa+Barat+41215%0D%0Ahttps%3A%2F%2Fgoo.gl%2Fmaps%2FXWYrHyXxTLNh4KiD7";
  const location = "Graha+Sofia";
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&dates=${dates}&location=${location}`;

  return (
    <div>
      <p className="mb-1 slide-up">
        Yang insyaa Allah akan diselenggarakan pada:
      </p>
      <div className="mt-1">
        <p className="center font-size-1 slide-up">Sabtu, 22 Oktober 2022</p>
      </div>
      <div className="mt-1">
        <p className="font-1 scale-up">Akad Nikah</p>
        <p className="font-size-1 slide-up mt-1">Pukul 10.00 - 11.30 WIB</p>
      </div>
      <div>
        <p className="font-1 scale-up mt-1">Walimah</p>
        <p className="font-size-1 slide-up mt-1">Pukul 12.30 - 14.00 WIB</p>
      </div>
      <p className="mt-2 mb-1 fade-in px-1">
        Maha Suci Allah ‘Azza wa Jalla yang menautkan dua hati dalam ikatan suci
        pernikahan. Semoga pernikahan ini bisa menjadi langkah awal kami untuk
        dapat berkumpul bersama kaum mukminin di syurga kelak. Aamiin.
      </p>
      <div className="px-1">
        <Image
          src="/images/divider.svg"
          alt="divider"
          className="scale-up"
          width="300"
          height="60"
        />
        <p
          className="font-1 font-size-2 scale-up mt-1 mb-2"
          style={{ letterSpacing: "2.8px" }}
        >
          Hitung Mundur Acara
        </p>
        <CountdownComponent targetDate={targetDate} />
        <div className="mt-3 scale-up">
          <a
            className="action-button center"
            target="_blank"
            href={url}
            rel="nofollow noreferrer"
            role="button"
            onClick={() => {
              ReactGA.event({
                category: "Event",
                action: "Click google calendar button",
              });
            }}
          >
            Simpan ke Google Calendar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;
