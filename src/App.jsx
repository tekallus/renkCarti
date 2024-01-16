import "./styles.css";

import colorData from "./data/colorData";
import Header from "./components/Header";

export default function App() {
  /* Challenge

	Frontend Dergisi, okuyucularına front-end geliştirmedeki en iyi 100 rengi göstermenizi bekliyor. Göreviniz onları aşağıdaki gibi oluşturmak: 
	
		1. colorData dizisindeki 100 hex kodlu rengin her biri için aşağıda işaretli alanda bir ColorCard elementi bulunmalıdır. Renkler zaten sıralanmıştır, bu nedenle elementlerin sırası array'deki renklerin sırası ile eşleşmelidir. 
		   
		2. colorData bileşenindeki sabit kodlu bilgiler, prop'lar aracılığıyla aktarılan verilerle değiştirilmelidir. 
		   
		3. Bu görevleri doğru bir şekilde tamamlarsanız, "En İyi 100 Renk" başlığının altında 100 renk kartı görmelisiniz. Her renk, ilgili rengin sıra numarasını, hex kodunu ve gerçek rengin kendisini arka planda göstermelidir
		   
		Not: colorData dosyaya aktarılmıştır
*/
  // 1)ColorCard fonksiyonel bir bileşen haline getirelim ve bu bileşenin iki prop alması sağlayalim: color ve index.
  function ColorCard({ color, index }) {
    return (
      <div className="color-card" style={{ background: color }}>
        <p>
          {/*ColorCard bileşeni, aldığı color ve index prop'larına göre renk kartını oluşturalim.*/}
          <span>{index + 1}.</span> {color}
        </p>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Header />

      {/*colorData dizisi üzerinde map fonksiyonu kullanılarak her renk için bir ColorCard bileşeni oluşturalim.*/}
      {colorData.map((color, index) => (
        // Her bir ColorCard bileşeni bir key'e ve rengin kendisine sahip olacak şekilde oluşturuluyor.
        <ColorCard key={color} color={color} index={index} />
      ))}

      {/*Her ColorCard bileşenine bir key atandı ve color ve index prop'ları geçirildi.
       */}
    </div>
  );
}
