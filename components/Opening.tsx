import Image from "next/image";
function Opening() {
  return (
    <div>
      <p className="scale-up font-size-1 bold">
        وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
        لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
        إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </p>
      <p className="mt-1 italic fade-in">
        Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
        isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
        tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
        bagi kaum yang berfikir
      </p>
      <p className="mt-0-5 mb-2 slide-down">(QS. Ar-Ruum : 21)</p>

      <Image
        src="/images/divider.svg"
        alt="divider"
        className="scale-up"
        width="600"
        height="40"
      />
      <p className="mt-3 scale-up font-size-1 bold">
        إِذَا تَزَوَّجَ العَبْدُ فَقَدْ كَمَّلَ نَصْفَ الدِّيْنِ ، فَلْيَتَّقِ
        اللهَ فِي النِّصْفِ البَاقِي
      </p>
      <p className="mt-1 italic fade-in">
        Jika seseorang menikah, maka ia telah menyempurnakan separuh agamanya.
        Karenanya, bertakwalah pada Allah pada separuh yang lainnya.”
      </p>
      <p className="mt-0-5 slide-down">(HR. Al Baihaqi)</p>
    </div>
  );
}

export default Opening;
