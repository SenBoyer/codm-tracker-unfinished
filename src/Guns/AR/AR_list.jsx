import React from "react";
import CamoList from "../Completion/CamoList";
import { useState } from "react";
import { useGetCompletionData } from "../../hooks/getInfo";

export default function AR_LIST() {
  const [damascusPercent, setDamascusPercent] = useState(0);
  let { setAllCamos } = useGetCompletionData();
  return (
    <>
      <h1>Assault Rifle</h1>
      <div className="gun-grid">
        <div>
          <h1>ASM10</h1>
          <img
            src="https://i.imgur.com/4rk88oj.jpg"
            alt="ASM10"
            onDoubleClick={setAllCamos}
          />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>AK-47</h1>
          <img src="https://i.imgur.com/tiwEg6m.jpg" alt="AK47" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>M16</h1>
          <img src="https://i.imgur.com/xGbpnJb.jpg" alt="M16" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>M4</h1>
          <img src="https://i.imgur.com/LP0kr6K.jpg" alt="M4" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>BK57</h1>
          <img src="https://i.imgur.com/mUp4KH7.jpg" alt="BK57" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>LK24</h1>
          <img src="https://i.imgur.com/3iNpSfh.jpeg" alt="LK24" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>AK117</h1>
          <img
            src="https://zilliongamer.com/uploads/codm/skins/assault/ak117/ak117-munitions-cod-mobile.jpg"
            alt="AK117"
          />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>M13</h1>
          <img
            src="https://zilliongamer.com/uploads/codm/weapons/ar/m13/m13-cod-mobile.jpg"
            alt="M13"
          />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>Kilo 141</h1>
          <img
            src="https://zilliongamer.com/uploads/codm/weapons/ar/kilo-141/kilo-141-call-of-duty-mobile.jpg"
            alt="Kilo 141"
          />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>KN-44</h1>
          <img src="https://i.imgur.com/OzlDWlk.jpg" alt="KN-44" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>Man-O-War</h1>
          <img src="https://i.imgur.com/Y8AYudI.jpg" alt="Man-O-War" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>CR-56 AMAX</h1>
          <img src="https://i.imgur.com/3ZWIfZA.jpg" alt="CR-56 AMAX" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>AS VAL</h1>
          <img src="https://i.imgur.com/6mzUd8F.jpg" alt="AS VAL" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>Swordfish</h1>
          <img src="https://i.imgur.com/pI8GQ6G.jpg" alt="Swordfish" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>HVK-30</h1>
          <img src="https://i.imgur.com/pCJHS2J.jpg" alt="HVK-30" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>Peacekeeper MK2</h1>
          <img src="https://i.imgur.com/joXdWda.jpg" alt="Peacekeeper MK2" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>FR .556</h1>
          <img src="https://i.imgur.com/zn8pshJ.jpg" alt="FR .556" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>Oden</h1>
          <img src="https://i.imgur.com/Iupg5eL.jpg" alt="Oden" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>ICR-1</h1>
          <img src="https://i.imgur.com/aJNh1Kb.jpg" alt="ICR-1" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>HBRa3</h1>
          <img src="https://i.imgur.com/0Imj29v.jpg" alt="HBRa3" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>

        <div>
          <h1>DR-H</h1>
          <img src="https://i.imgur.com/QE8KvoQ.jpg" alt="DR-H" />
          <CamoList
            damascusPercent={damascusPercent}
            setDamascusPercent={setDamascusPercent}
          />
        </div>
      </div>
    </>
  );
}
