import { useState } from "react";

export default function Page1() {
  const menu = [
    { image: "gambar1.jpg", judul: "Mount Fuji", desc: "Mount Fuji : Japan’s highest peak, a symbol of natural beauty and cultural heritage." },
    { image: "gambar3.jpg", judul: "Torii", desc: "Torii : marking the sacred boundary between the human and the realm of the divine." },
    { image: "gambar4.jpg", judul: "Himeji Castle", desc: "Himeji Castle : The elegant white marvel stands as a testament to the architectural brilliance of the era" },
  ];

  const [tombol, setTombol] = useState(0);
  const [gambar, setGambar] = useState(menu[0].image);

  function tekan(index) {
    setTombol(index);
    setGambar(menu[index].image);
  }

  const menuu = menu.map((menu, index) => (
    <div onClick={() => tekan(index)} className={`menu-inner ${tombol == index ? "inner-select" : ""}`} key={index}>
      <img style={{ width: "30px", height: "30px", margin: "10px" }} src="white-ring.png" alt="ring" />
      <p>{menu.desc}</p>
    </div>
  ));

  const keBawah = () => {
    window.scrollTo(0, 10000);
  };

  return (
    <div style={{ backgroundImage: `url(${gambar})` }} id="Page1">
      <div className="content">
        <h1>
          VISIT <br />
          JAPAN
        </h1>
        <div className="page1-menu">
          <div className="innner">{menuu}</div>
          <div onClick={keBawah} className="scroll">
            <p>MORE</p>
            <img src="down.png" alt="down" />
          </div>
        </div>
      </div>
    </div>
  );
}
