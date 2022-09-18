import { useState } from "react";
import Loading from "./Loading";
import ReactGA from "react-ga";

interface WishesFormProps {
  onSubmit(): void;
}

function WishesForm({ onSubmit }: WishesFormProps) {
  const recipient = localStorage.getItem("recipient") || "";
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (event: any) => {
    if (!isLoading) {
      setLoading(true);
      // Stop the form from submitting and refreshing the page.
      event.preventDefault();

      // Get data from the form.
      const form = {
        name: event.target.name.value,
        message: event.target.message.value,
        rsvp: event.target.rsvp.value,
        currentTimestamp: new Date().toLocaleString(),
      };

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      await response.json();

      event.target.message.value = "";
      onSubmit();
      setLoading(false);
    }
  };

  const findInputName = document.getElementById("name") as HTMLInputElement;
  if (findInputName) {
    findInputName.value = recipient;
  }

  return (
    <div className="mb-1">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">
            <p className="fade-in">Nama:</p>
          </label>
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
          <label htmlFor="message">
            <p className="fade-in">Ucapan:</p>
          </label>
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
          <button
            type="submit"
            className="center action-button fullwidth"
            disabled={isLoading}
            onClick={() => {
              ReactGA.event({
                category: "Navigation",
                action: "Click send wishes",
              });
            }}
          >
            {isLoading ? (
              <span style={{ transform: "scale(0.6)" }}>
                <Loading />
              </span>
            ) : (
              "Kirim Ucapan"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default WishesForm;
