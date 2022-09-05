import Link from "next/link";

function Cover() {
  const isEligible = true;
  return (
    <div className="center fullheight">
      <div>
        <p className="font-size-2 slide-up">The Wedding of</p>
        <div className="mt-2 mb-2 shine scale-up">Nita & Amin</div>
        <p className="font-size-1 slide-down">Kepada Yth.</p>
        <p className="font-size-2 mt-1 bold fade-in">Alvin Wardhana</p>
        <p className="font-size-1 slide-down">di Tempat</p>
        {isEligible ? (
          <Link href="/content">
            <button className="action-button mt-2 slide-down">
              Buka Undangan
            </button>
          </Link>
        ) : (
          <div>Silakan masuk melalui link yang sudah diberikan</div>
        )}
      </div>
    </div>
  );
}

export default Cover;
