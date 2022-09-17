// import Icon from '@mdi/react';
// import { mdiInstagram } from '@mdi/js';
import Image from "next/image";
import Heart from "./Heart";
function Pengantin() {
  return (
    <div>
      <Image
        src="/images/bismillah.webp"
        alt="bismillah"
        className="bismillah scale-up"
        width="192"
        height="43"
      />
      <p className="italic slide-up mt-2">
        Assalamu’alaikum warahmatullahi wabarakatuh
      </p>
      <p className="mt-0-5 slide-up">
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaa Allah
        kami akan melangsungkan acara akad nikah dan resepsi pernikahan antara:
      </p>
      <div className="mt-2 mx-1">
        <div>
          {/* <img className="avatar" src="https://invetin.id/wp-content/uploads/2020/12/muslimah-10-thumb.png" alt="akhwat" /> */}
          <p className="font-1 scale-up m-0 dark-purple">
            Anita Mediana <br />
            (Nita)
          </p>
        </div>
        {/* <a href="https://instagram.com/medianasutamenggala" className="center plain-text" target="_blank" rel="noreferrer">
                    <Icon size={0.8} path={mdiInstagram} /><span className='ml-0-5'> medianasutamenggala</span>
                </a> */}

        <p className="mt-0-5 slide-down">
          Putri bungsu dari Bapak Diman Kadiman dan Ibu Yasinah (rahimahallah)
        </p>
      </div>
      <p className="font-1 font-size-3 scale-up m-0 dark-purple m-2">&amp;</p>
      {/* <Heart /> */}
      <div className="mb-1 mx-1">
        <div>
          {/* <img className="avatar" src="https://invetin.id/wp-content/uploads/2020/12/muslim-08-thumb.png" alt="ikhwan" /> */}
          <p className="font-1 scale-up m-0 dark-purple">
            Aminur Muda Nasution <br />
            (Amin)
          </p>
        </div>
        {/* <a href="https://instagram.com/aminurmuda" className="center plain-text" target="_blank" rel="noreferrer">
                    <Icon size={0.8} path={mdiInstagram} /><span className='ml-0-5'>aminurmuda</span>
                </a> */}
        <p className="mt-0-5 slide-down">
          Putra kedua dari Bapak Aris Muda Nasution (rahimahullah) dan Ibu Jean
          Leila Hanoum
        </p>
      </div>
    </div>
  );
}

export default Pengantin;
