import { useState, useEffect } from "react";
import { useTime } from "../utils/useCountdown";
import Loading from "./Loading";
import WishesForm from "./WishesForm";
import Image from "next/image";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}
function Wishes() {
  const [sheetData, setSheetData] = useState<Wish[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    if (!isLoading) {
      setLoading(true);
      const response = await fetch("/api/get-wishes", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const content = await response.json();
      setSheetData(content.data);
      setLoading(false);
    }
  };

  const WishItem = (props: any) => {
    const { data } = props;
    const targetDate = new Date(data[2]).getTime();
    const timestamp = useTime(targetDate);
    return (
      <div className="wish fade-in">
        <div className="flex space-between mb-2">
          <p className="bold">{data[0]}</p>
          <p className="timestamp">{timestamp}</p>
        </div>
        <p>{data[1]}</p>
      </div>
    );
  };

  return (
    <div>
      <p className="font-1 mb-1 scale-up">Ucapan & Doa</p>
      <WishesForm onSubmit={fetchData} />
      <Image
        src="/images/divider.svg"
        alt="divider"
        className="scale-up"
        width="600"
        height="80"
      />
      <div style={{ minHeight: "48px" }}>
        {isLoading && <Loading />}
        {sheetData && !isLoading && (
          <div className="wishes-container">
            {sheetData.map((item: Wish, index: number) => {
              return (
                <div key={index}>
                  <WishItem data={item} />
                </div>
              );
            })}
          </div>
        )}
        {!sheetData && !isLoading && <p>Belum ada data</p>}
      </div>
    </div>
  );
}

export default Wishes;
