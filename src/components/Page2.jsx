import { useState } from "react";

export default function Page2() {
  const menu = [
    {
      image: "hiroshima.jpg",
      judul: "HIROSHIMA",
      desc: "Hiroshima is a city in Japan, precisely in the western part of Hiroshima Prefecture, southern part of the Chugoku region, southwest of the island of Honshu. In ancient times it was the capital of Aki Province and is now the capital of Hiroshima Prefecture.",
    },
    {
      image: "kyoto.jpg",
      judul: "KYOTO",
      desc: "One of Japan's 47 prefectures which has been the capital of Japan since 1869. Until 2018, Greater Tokyo was ranked first as the most populous metropolitan area in the world. Tokyo is the seat of the Japanese Emperor, the Japanese government, and the Japanese Parliament.",
    },
    {
      image: "hokkaido.jpg",
      judul: "HOKKAIDO",
      desc: "Kyoto is a city located on Honshu Island, Japan. The city is part of the Osaka-Kobe-Kyoto metropolitan area. Kyoto has many historical sites and is the capital of Kyoto Prefecture. The palace capital Heian-kyō was established as the capital in 794.",
    },
    {
      image: "tokyo.jpg",
      judul: "TOKYO",
      desc: "Hokkaido is Japan's second largest main island, and is Japan's largest and northernmost prefecture. The island was previously known as Ezo, Yezo, Yeso, or Yesso. The Tsugaru Strait separates Hokkaido from Honshū. The two islands are connected by the Seikan Tunnel underwater railway.",
    },
  ];

  const [enter, setEnter] = useState(0);

  function mouse(index) {
    setEnter(index);
  }

  return (
    <div id="page2">
      <p>We`ve selected some popular tourist spots for you</p>
      <h1>POPULAR SPOTS</h1>
      <div className="page2">
        {menu.map((menu, index) => (
          <div onMouseEnter={() => mouse(index)} onMouseLeave={() => mouse()} key={index} className="page2-menu" style={{ backgroundImage: `url(${menu.image})` }}>
            <div className={`p2-menu-inner ${enter == index ? "hovering" : ""}`}>
              <h1>{menu.judul}</h1>
              <br />
              <p>{menu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
