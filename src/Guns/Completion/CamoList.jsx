import { useState, useEffect, useContext } from "react";
import { FaCheck } from "react-icons/fa";
import React from "react";
import { useGetCompletionData } from "../../hooks/getInfo";
import { damascusProgress } from "../../damascusContext";

export default function CamoList({ damascusPercent, setDamascusPercent }) {
  const {
    goldIsActive,
    setGoldActive,
    totalCamo,
    setTotalCamo,
    sandIsActive,
    handleSandClick,
    handleDragonClick,
    dragonIsActive,
    splinterIsActive,
    handleSplinterClick,
    tigerIsActive,
    handleTigerClick,
    handleReptileClick,
    reptileIsActive,
    jungleIsActive,
    handleJungleClick,
  } = useGetCompletionData();

  let { setCount } = useContext(damascusProgress);

  useEffect(() => {
    if (totalCamo === 6) {
      setGoldActive((current) => !current);
      setDamascusPercent((prev) => prev + 1);
      setTotalCamo((prev) => prev + 1);
      setCount((prev) => prev + 4.8);
      updateFill();
    }

    function updateFill() {
      let number = (damascusPercent / 20) * 100;
      document.documentElement.style.setProperty(
        "--circle-radius",
        `${number}deg`
      );
    }

    updateFill();
  }, [totalCamo]);

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
      <div id="gold" className={goldIsActive ? "gold-active" : ""}>
        <div className={goldIsActive ? "tooltip-hidden" : "tooltip"}>
          <span className="tooltiptext">Unlock all previous camos</span>
        </div>
        <FaCheck className={goldIsActive ? "checkmarkGold" : "nocheckmark"} />
      </div>
      <div id="platinum"></div>
      <div id="demas"></div>
    </div>
  );
}
