import Icon from "@mdi/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Logout from "./Logout";
import { mdiWhatsapp } from "@mdi/js";

interface Recipient {
  name: string;
  nickname: string;
  from: string;
  phone: string;
  is_sent: string;
  show: string;
}
function Forward() {
  const [sheetData, setSheetData] = useState<Recipient[]>([]);
  const [filteredData, setFilteredData] = useState<Recipient[]>(sheetData);
  const [isLoading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (data: any) => {
    if (!isLoading) {
      // Get data from the form.
      const form = {
        check: parseInt(data[0]) ? 0 : 1,
        row: data[1],
      };

      const response = await fetch("/api/update", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const content = await response.json();
      fetchData();
    }
  };

  const fetchData = async () => {
    if (!isLoading) {
      setLoading(true);
      const response = await fetch("/api/get-recipients", {
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

  interface RecipientData {
    fullname: string;
    nickname: string;
    link: string;
  }
  const buildMessage = ({ fullname, nickname, link }: RecipientData) => {
    const text = `
Bismillaahirrahmaanirrahiim
_Assalamu'alaikum warahmatullahi wabarakatuh_

Kepada Yth.
${fullname}

Bagaimana kabarnya ${nickname}? Semoga ${nickname} dan keluarga sehat selalu dan berada di bawah lindungan Allah 'Azza wa Jalla. Melalui pesan singkat ini, kami ingin mengundang ${nickname} untuk menghadiri acara walimah pernikahan kami,

*Anita Mediana (Nita)*
Putri Dari Bapak Diman Kadiman dan Ibu Yasinah
&
*Aminur Muda Nasution (Amin)*
Putra dari Bapak Aris Muda Nasution dan Ibu Jean Leila Hanoum

Yang insyaa Allah akan berlangsung pada:
🗓️ Sabtu, 22 Oktober 2022
🕙 10.00-14.00 WIB (Akad & Resepsi)
🏠 Graha Sofia, Kab. Subang

Informasi detail mengenai acara dan kehadiran bisa diakses melalui link berikut:
${link}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila ${nickname} berkenan untuk hadir dan juga memberikan doa restunya agar prosesi pernikahan kami bisa berjalan dengan baik.

_Barakallahu fiikum_
_Wassalamu'alaikum warahmatullahi wabarakatuh_

Nita & Amin`;
    return text;
  };

  const RecipientItem = (props: any) => {
    const { data, row } = props;
    const fullname = data[0];
    const nickname = data[1];
    const phone = data[2];
    const link = `${process.env.NEXT_PUBLIC_BASE_URL}?to=${fullname
      .split(" ")
      .join("+")}`;

    const recipientData = { fullname, nickname, link };
    const text = encodeURIComponent(buildMessage(recipientData));
    return (
      <div className="wish fade-in flex space-between">
        <div>
          <p>{data[0]}</p>
          <p>{data[2]}</p>
        </div>
        <div className="flex">
          {phone && (
            <>
              <div>
                <Link
                  className="ml-1"
                  href={`https://wa.me/${phone}?text=${text}`}
                  replace
                >
                  <button
                    className="action-button-sm"
                    aria-label="forward via whatsapp"
                  >
                    <Icon path={mdiWhatsapp} size={1} />
                  </button>
                </Link>
              </div>
              <div className="ml-1 mr-1">
                <input
                  type="checkbox"
                  defaultChecked={!!parseInt(data[3])}
                  onClick={() => {
                    handleSubmit([data[3], row]);
                  }}
                />
                <p>Sent</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  function onChangeValue(event: any) {
    setFilter(event.target.value);
  }

  const filterData = () => {
    if (filter === "amin") {
      const data = sheetData.filter((item: any) => {
        return item[5].toLowerCase().includes("amin");
      });
      setFilteredData(data);
    } else if (filter === "nita") {
      const data = sheetData.filter((item: any) => {
        return item[5].toLowerCase().includes("nita");
      });
      setFilteredData(data);
    } else {
      return setFilteredData(sheetData);
    }
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sheetData]);

  return (
    <div>
      <p className="font-1 mb-1 scale-up">Forward Undangan</p>
      <p>Untuk memudahkan dalam mengirim link undangan via Whatsapp</p>
      <Logout />
      <hr className="mt-2 mb-2 scale-up" />
      <div className="flex mb-1" onChange={onChangeValue}>
        <input
          name="filter"
          type="radio"
          id="all"
          value={"all"}
          defaultChecked={filter === "all"}
        />
        <label htmlFor="all" className="mr-2">
          All
        </label>
        <input
          name="filter"
          type="radio"
          id="amin"
          value={"amin"}
          defaultChecked={filter === "amin"}
        />
        <label htmlFor="amin" className="mr-2">
          Amin
        </label>
        <input
          name="filter"
          type="radio"
          id="nita"
          value={"nita"}
          defaultChecked={filter === "nita"}
        />
        <label htmlFor="nita" className="mr-2">
          Nita
        </label>
      </div>
      {isLoading && <Loading />}
      {filteredData && !isLoading && (
        <div className="wishes-container">
          {filteredData.map((item: Recipient, index: number) => {
            return (
              <div key={index}>
                <RecipientItem data={item} row={index} />
              </div>
            );
          })}
        </div>
      )}
      {filteredData.length === 0 && !isLoading && <p>Belum ada data</p>}
    </div>
  );
}

export default Forward;
