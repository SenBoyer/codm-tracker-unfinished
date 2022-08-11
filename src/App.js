import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import LoadingCircle from "./Guns/Completion/LoadingCircle";
import CamoList from "./Guns/Completion/CamoList";

function App() {
  let gun_list = [
    { name: "ASM10", img: "https://i.imgur.com/4rk88oj.jpg" },
    { name: "AK-47", img: "https://i.imgur.com/tiwEg6m.jpg" },
    { name: "M16", img: "https://i.imgur.com/xGbpnJb.jpg" },
    { name: "M4", img: "https://i.imgur.com/LP0kr6K.jpg" },
    { name: "BK57", img: "https://i.imgur.com/mUp4KH7.jpg" },
    { name: "LK24", img: "https://i.imgur.com/3iNpSfh.jpeg" },
    {
      name: "AK117",
      img: "https://zilliongamer.com/uploads/codm/skins/assault/ak117/ak117-munitions-cod-mobile.jpg",
    },
    {
      name: "M13",
      img: "https://zilliongamer.com/uploads/codm/weapons/ar/m13/m13-cod-mobile.jpg",
    },
    {
      name: "Kilo 141",
      img: "https://zilliongamer.com/uploads/codm/weapons/ar/kilo-141/kilo-141-call-of-duty-mobile.jpg",
    },
    { name: "KN-44", img: "https://i.imgur.com/OzlDWlk.jpg" },
    { name: "Man-O-War", img: "https://i.imgur.com/Y8AYudI.jpg" },
    { name: "CR-56 AMAX", img: "https://i.imgur.com/3ZWIfZA.jpg" },
    { name: "AS VAL", img: "https://i.imgur.com/6mzUd8F.jpg" },
    { name: "Swordfish", img: "https://i.imgur.com/pI8GQ6G.jpg" },
    { name: "HVK-30", img: "https://i.imgur.com/pCJHS2J.jpg" },
    { name: "Peacekeeper MK2", img: "https://i.imgur.com/joXdWda.jpg" },
    { name: "FR .556", img: "https://i.imgur.com/zn8pshJ.jpg" },
    { name: "Oden", img: "https://i.imgur.com/Iupg5eL.jpg" },
    { name: "ICR-1", img: "https://i.imgur.com/aJNh1Kb.jpg" },
    { name: "HBRa3", img: "https://i.imgur.com/0Imj29v.jpg" },
    { name: "DR-H", img: "https://i.imgur.com/QE8KvoQ.jpg" },
  ];

  const [damascusPercent, setDamascusPercent] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <LoadingCircle damascusPercent={damascusPercent} />
      <h1 id="title">Weapons</h1>
      <div className="gun-grid">
        {gun_list.map((gun_list) => {
          return (
            <CamoList
              gunName={gun_list.name}
              gunImage={gun_list.img}
              damascusPercent={damascusPercent}
              setDamascusPercent={setDamascusPercent}
            />
          );
        })}
      </div>
      <div>
        <h1>Medals</h1>
      </div>
    </div>
  );
}

export default App;
