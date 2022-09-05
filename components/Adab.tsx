import Icon from "@mdi/react";
import {
  mdiHumanMale,
  mdiHumanFemale,
  mdiHandsPray,
  mdiMosqueOutline,
  mdiSmokingOff,
  mdiSilverwareForkKnife,
  mdiHanger,
  mdiCameraOffOutline,
} from "@mdi/js";

function Adab() {
  const list = [
    {
      id: 1,
      isActive: true,
      message: "Tamu ikhwan & akhwat terpisah",
      icon: mdiHumanMale,
      iconAlt: mdiHumanFemale,
    },
    {
      id: 2,
      isActive: true,
      message: "Gunakan Pakaian yang Sopan & Menutup Aurat",
      icon: mdiHanger,
    },
    {
      id: 3,
      isActive: true,
      message: "Mendoakan Pengantin",
      icon: mdiHandsPray,
    },
    {
      id: 4,
      isActive: true,
      message: "Tidak menyisakan makanan yang sudah diambil",
      icon: mdiSilverwareForkKnife,
    },
    {
      id: 5,
      isActive: true,
      message: "Memperhatikan waktu sholat (ada masjid di dekat gedung)",
      icon: mdiMosqueOutline,
    },
    {
      id: 6,
      isActive: true,
      message: "Tidak mengambil foto/video mempelai tanpa izin",
      icon: mdiCameraOffOutline,
    },
    { id: 7, isActive: true, message: "Dilarang merokok", icon: mdiSmokingOff },
  ];

  return (
    <div>
      <div>
        <p className="font-1 mb-1 slide-up">Adab Walimah</p>
      </div>
      <div className="grid-container">
        {list.map((item) => {
          return (
            <div key={item.id} className="grid-item">
              {item.iconAlt ? (
                <div className="scale-up">
                  <Icon size={2} path={item.icon} className="mr-0-5" />
                  <Icon size={2} path={item.iconAlt} className="mr-0-5" />
                </div>
              ) : (
                <Icon size={2} path={item.icon} className="mr-0-5 scale-up" />
              )}
              <p className="slide-down">{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Adab;
