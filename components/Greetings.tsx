import { useState, useEffect, FormEvent } from "react";
import { useTime } from "../utils/useCountdown";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}
function Greetings() {
  const [sheetData, setSheetData] = useState<Wish[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
  };

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const form = {
      name: event.target.name.value,
      message: event.target.message.value,
      rsvp: event.target.rsvp.value,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();
    await fetchData();
  };

  const WishesForm = () => {
    return (
      <div className="mb-1">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nama:</label>
            <br />
            <input
              className="input slide-down"
              type="text"
              id="name"
              name="name"
              required
              placeholder="Nama anda"
            />
          </div>
          <div className="field">
            <label htmlFor="message">Ucapan:</label>
            <br />
            <textarea
              id="message"
              className="input slide-down"
              name="message"
              required
              rows={4}
              placeholder="Tulis ucapan dan doa terbaik anda"
            ></textarea>
          </div>
          <div className="field slide-down">
            <input type="radio" id="hadir" name="rsvp" value="hadir" required />
            <label htmlFor="hadir">Hadir</label>
            <input
              className="ml-1"
              type="radio"
              id="tidak"
              name="rsvp"
              value="tidak hadir"
              required
            />
            <label htmlFor="tidak">Tidak Hadir</label>
          </div>
          <div className="mt-2 scale-up">
            <button type="submit" className="center action-button fullwidth">
              Kirim Ucapan
            </button>
          </div>
        </form>
      </div>
    );
  };

  interface WishItemProps {
    data: Wish;
  }
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
      <WishesForm />
      <hr className="mt-2 mb-2 scale-up" />
      {isLoading && <p>Loading...</p>}
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
      {!sheetData && <p>Belum ada data</p>}
    </div>
  );
}

export default Greetings;
