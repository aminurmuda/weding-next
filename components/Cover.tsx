import Link from "next/link";
interface CoverProps {
  name?: string | string[] | undefined;
}
function Cover(props: CoverProps) {
  const { name } = props;
  const isEligible = !!name;
  return (
    <div className="center fullheight">
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
      <div>
        <p className="font-size-2 slide-up">The Wedding of</p>
        <div className="mt-2 mb-2 shine scale-up">Nita & Amin</div>
        {isEligible ? (
          <div>
            <p className="font-size-1 slide-down">Kepada Yth.</p>
            <p className="font-size-2 mt-1 bold fade-in">{name}</p>
            <p className="font-size-1 slide-down">di Tempat</p>
            <Link href="/content?page=home">
              <button className="action-button mt-2 slide-down">
                Buka Undangan
              </button>
            </Link>
          </div>
        ) : (
          <div className="mt-2">
            Silakan masuk melalui link yang sudah diberikan
          </div>
        )}
      </div>
    </div>
  );
}

export default Cover;
