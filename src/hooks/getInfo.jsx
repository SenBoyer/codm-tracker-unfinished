import { useState, useEffect } from "react";

export const useGetCompletionData = () => {
  const [sandIsActive, setSandActive] = useState(false);
  const [dragonIsActive, setDragonActive] = useState(false);
  const [splinterIsActive, setSplinterActive] = useState(false);
  const [tigerIsActive, setTigerActive] = useState(false);
  const [reptileIsActive, setReptileActive] = useState(false);
  const [jungleIsActive, setJungleActive] = useState(false);
  const [totalCamo, setTotalCamo] = useState(0);
  const [goldIsActive, setGoldActive] = useState(false);

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

  const setAllCamos = (event) => {
    console.log("set all camos start");
    setReptileActive((current) => !current);
    setSandActive((current) => !current);
    setTigerActive((current) => !current);
    setJungleActive((current) => !current);
    setDragonActive((current) => !current);
    setTotalCamo((prev) => prev + 6);
    console.log("set all camos finished");
  };

  return {
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
    setAllCamos,
  };
};
