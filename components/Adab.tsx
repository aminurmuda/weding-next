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
  mdiFaceMask,
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
      message: "Menggunakan pakaian yang sopan & menutup aurat",
      icon: mdiHanger,
    },
    {
      id: 3,
      isActive: true,
      message: "Mendoakan pengantin",
      icon: mdiHandsPray,
    },
    {
      id: 4,
      isActive: true,
      message: "Memperhatikan waktu sholat",
      icon: mdiMosqueOutline,
    },
    {
      id: 5,
      isActive: true,
      message: "Menghabiskan makanan yang sudah diambil",
      icon: mdiSilverwareForkKnife,
    },
    {
      id: 6,
      isActive: true,
      message: "Tidak mengambil foto/video mempelai tanpa izin",
      icon: mdiCameraOffOutline,
    },
    {
      id: 7,
      isActive: true,
      message: "Tidak merokok di area acara",
      icon: mdiSmokingOff,
    },
    {
      id: 8,
      isActive: true,
      message: "Menggunakan masker dan tetap menjaga protokol kesehatan",
      icon: mdiFaceMask,
    },
  ];

  return (
    <div>
      <div>
        <p className="font-1 mb-3 scale-up">Adab Walimah</p>
      </div>
      <div className="mt-2 left px-1">
        {list.map((item) => {
          return (
            <div key={item.id} className="mb-2 flex align-top">
              <div className="center" style={{ minWidth: "80px" }}>
                {item.iconAlt ? (
                  <div className="center">
                    <div className="scale-up flex" style={{ width: "64px" }}>
                      <Icon size={1} path={item.icon} />
                      <hr
                        style={{
                          width: "24px",
                          rotate: "90deg",
                          height: "3px",
                        }}
                      />
                      <Icon size={1} path={item.iconAlt} />
                    </div>
                  </div>
                ) : (
                  <Icon size={1} path={item.icon} className="mr-0-5 scale-up" />
                )}
              </div>
              <p className="fade-in">{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Adab;
