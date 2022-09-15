import Image from "next/image";
function Closing() {
  return (
    <div>
      <p className="slide-up">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada
        kami.
      </p>
      <p className="slide-up">Wassalamu’alaikum warahmatullahi wabarakatuh</p>
      <p className="font-size-0-5 mt-2 slide-up">Kami yang berbahagia,</p>
      <p className="font-1 mt-1 scale-up">
        Nita <span className="font-size-2">&</span> Amin
      </p>
      <p className="font-size-0-5 mt-1 slide-up">
        Keluarga Bapak Diman & Ibu Yasinah
      </p>
      <p className="font-size-0-5 slide-up">Keluarga Bapak Aris & Ibu Jean </p>
      <Image
        src="/images/divider.svg"
        alt="divider"
        className="scale-up"
        width="600"
        height="120"
      />
      <p className="font-1 scale-up">Doa Untuk Pengantin</p>
      <h2 className="m-2 slide-down">
        بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
      </h2>
      <p className="italic fade-in">
        Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu
        susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan
      </p>
      <p className="mt-0-5 slide-down">(HR. Abu Dawud)</p>
    </div>
  );
}

export default Closing;
