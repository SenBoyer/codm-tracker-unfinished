import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import React from "react";

export default function CamoList({ damascusPercent, setDamascusPercent }) {
  const [sandIsActive, setSandActive] = useState(false);
  const [dragonIsActive, setDragonActive] = useState(false);
  const [splinterIsActive, setSplinterActive] = useState(false);
  const [tigerIsActive, setTigerActive] = useState(false);
  const [reptileIsActive, setReptileActive] = useState(false);
  const [jungleIsActive, setJungleActive] = useState(false);
  const [totalCamo, setTotalCamo] = useState(0);
  const [goldCamo, setGoldCamo] = useState(false);
  const [goldCount, setGoldCount] = useState(0);

  const handleSandClick = (event) => {
    // 👇️ toggle isActive state on click
    setSandActive((current) => !current);
    if (sandIsActive) {
      setTotalCamo((prev) => prev - 1);
    } else {
      setTotalCamo((prev) => prev + 1);
    }
  };

  const handleDragonClick = (event) => {
    // 👇️ toggle isActive state on click
    setDragonActive((current) => !current);
    if (dragonIsActive) {
      setTotalCamo((prev) => prev - 1);
    } else {
      setTotalCamo((prev) => prev + 1);
    }
  };

  const handleSplinterClick = (event) => {
    // 👇️ toggle isActive state on click
    setSplinterActive((current) => !current);
    if (splinterIsActive) {
      setTotalCamo((prev) => prev - 1);
    } else {
      setTotalCamo((prev) => prev + 1);
    }
  };

  const handleTigerClick = (event) => {
    // 👇️ toggle isActive state on click
    setTigerActive((current) => !current);
    if (tigerIsActive) {
      setTotalCamo((prev) => prev - 1);
    } else {
      setTotalCamo((prev) => prev + 1);
    }
  };

  const handleReptileClick = (event) => {
    // 👇️ toggle isActive state on click
    setReptileActive((current) => !current);
    if (reptileIsActive) {
      setTotalCamo((prev) => prev - 1);
    } else {
      setTotalCamo((prev) => prev + 1);
    }
  };

  const handleJungleClick = (event) => {
    // 👇️ toggle isActive state on click
    setJungleActive((current) => !current);
    if (jungleIsActive) {
      setTotalCamo((prev) => prev - 1);
    } else {
      setTotalCamo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (totalCamo === 6) {
      console.log("useEffect running on 6");
      setGoldCamo((current) => !current);
      setDamascusPercent((prev) => prev + 1);
      setTotalCamo((prev) => prev + 1);
      setGoldCount((prev) => prev + 1);
    }

    function updateFill() {
      let number = (damascusPercent / 20) * 100;
      document.documentElement.style.setProperty(
        "--circle-radius",
        `${number}deg`
      );
    }

    updateFill();
  }, [totalCamo, goldCount]);

  // function makeSizer(size) {
  //   return function () {
  //     document.documentElement.style.setProperty(
  //       "--circle-radius",
  //       `${newPixel}deg`)
  //   };
  // }

  return (
    <div className="collection">
      <p>{damascusPercent}</p>
      <div
        id="sand"
        className={sandIsActive ? "active" : ""}
        onClick={handleSandClick}
      >
        <div className={sandIsActive ? "tooltip-hidden" : "tooltip"}>
          <span className="tooltiptext">Kill 600 enemies</span>
        </div>
        <FaCheck className={sandIsActive ? "checkmarkSand" : "nocheckmark"} />
      </div>
      <div
        id="dragon"
        className={dragonIsActive ? "active" : ""}
        onClick={handleDragonClick}
      >
        <div className={dragonIsActive ? "tooltip-hidden" : "tooltip"}>
          <span className="tooltiptext">Kill 50 enemies with hip fire</span>
        </div>
        <FaCheck
          className={dragonIsActive ? "checkmarkDragon" : "nocheckmark"}
        />
      </div>
      <div
        id="splinter"
        className={splinterIsActive ? "active" : ""}
        onClick={handleSplinterClick}
      >
        <div className={splinterIsActive ? "tooltip-hidden" : "tooltip"}>
          <span className="tooltiptext">Kill 80 enemies at long distance</span>
        </div>
        <FaCheck
          className={splinterIsActive ? "checkmarkSplinter" : "nocheckmark"}
        />
      </div>
      <div
        id="tiger"
        className={tigerIsActive ? "active" : ""}
        onClick={handleTigerClick}
      >
        <div className={tigerIsActive ? "tooltip-hidden" : "tooltip"}>
          <span className="tooltiptext">
            Kill 125 enemies with 5 attachments equipped
          </span>
        </div>
        <FaCheck className={tigerIsActive ? "checkmarkTiger" : "nocheckmark"} />
      </div>
      <div
        id="jungle"
        className={jungleIsActive ? "active" : ""}
        onClick={handleJungleClick}
      >
        <div className={jungleIsActive ? "tooltip-hidden" : "tooltip"}>
          <span className="tooltiptext">Kill 100 enemies with head shots</span>
        </div>
        <FaCheck
          className={jungleIsActive ? "checkmarkJungle" : "nocheckmark"}
        />
      </div>
      <div
        id="reptile"
        className={reptileIsActive ? "active" : ""}
        onClick={handleReptileClick}
      >
        <div className={reptileIsActive ? "tooltip-hidden" : "tooltip"}>
          <span className="tooltiptext">
            Kill 80 enemies with no attachments equipped
          </span>
        </div>
        <FaCheck
          className={reptileIsActive ? "checkmarkReptile" : "nocheckmark"}
        />
      </div>
      <div id="gold" className={goldCamo ? "gold-active" : ""}></div>
      <div id="platinum"></div>
      <div id="demas"></div>
    </div>
  );
}
