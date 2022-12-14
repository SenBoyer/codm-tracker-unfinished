import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export const useGetCompletionData = () => {
  const [sandIsActive, setSandActive] = useState(false);
  const [dragonIsActive, setDragonActive] = useState(false);
  const [splinterIsActive, setSplinterActive] = useState(false);
  const [tigerIsActive, setTigerActive] = useState(false);
  const [reptileIsActive, setReptileActive] = useState(false);
  const [jungleIsActive, setJungleActive] = useState(false);
  const [totalCamo, setTotalCamo] = useState(0);
  const [goldIsActive, setGoldActive] = useState(false);
  const [camoArrayList, setCamoArrayList] = useState([]);

  const goldEffectRef = useRef();

  const handleSandClick = (event) => {
    console.log("handleSandClick running");
    // 👇️ toggle isActive state on click
    setSandActive((current) => !current);
    if (sandIsActive) {
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Sand")
      );
    } else {
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Sand"]);
    }
  };

  const handleDragonClick = (event) => {
    console.log("handleDragonClick running");
    // 👇️ toggle isActive state on click
    setDragonActive((current) => !current);
    if (dragonIsActive) {
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Dragon")
      );
    } else {
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Dragon"]);
    }
  };

  const handleSplinterClick = (event) => {
    console.log("handleSplinterClick running");
    // 👇️ toggle isActive state on click
    setSplinterActive((current) => !current);
    if (splinterIsActive) {
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Splinter")
      );
    } else {
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Splinter"]);
    }
  };

  const handleTigerClick = (event) => {
    console.log("handleTigerClick running");
    // 👇️ toggle isActive state on click
    setTigerActive((current) => !current);
    if (tigerIsActive) {
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Tiger")
      );
    } else {
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Tiger"]);
    }
  };

  const handleReptileClick = (event) => {
    console.log("handleReptileClick running");
    // 👇️ toggle isActive state on click
    setReptileActive((current) => !current);
    if (reptileIsActive) {
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Reptile")
      );
    } else {
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Reptile"]);
    }
  };

  const handleJungleClick = (event) => {
    console.log("handleJungleClick running");
    // 👇️ toggle isActive state on click
    setJungleActive((current) => !current);
    if (jungleIsActive) {
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Jungle")
      );
    } else {
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Jungle"]);
    }
  };

  const setAllCamos = (event) => {
    if (
      camoArrayList.includes("Sand") &&
      camoArrayList.includes("Jungle") &&
      camoArrayList.includes("Tiger") &&
      camoArrayList.includes("Dragon") &&
      camoArrayList.includes("Splinter") &&
      camoArrayList.includes("Reptile")
    ) {
      setSandActive(false);
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Sand")
      );
      setDragonActive(false);
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Dragon")
      );
      setSplinterActive(false);
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Splinter")
      );
      setTigerActive(false);
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Tiger")
      );
      setJungleActive(false);
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Jungle")
      );
      setReptileActive(false);
      setTotalCamo((prev) => prev - 1);
      setCamoArrayList((prev_array) =>
        prev_array.filter((item) => item !== "Reptile")
      );
    } else {
      gsap.fromTo(
        goldEffectRef.current,
        { opacity: 1, duration: 1 },
        { opacity: 0, duration: 1 }
      );
      console.log("set all camos start");
      setSandActive(true);
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Sand"]);
      setDragonActive(true);
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Dragon"]);
      setSplinterActive(true);
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Splinter"]);
      setTigerActive(true);
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Tiger"]);
      setJungleActive(true);
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Jungle"]);
      setReptileActive(true);
      setTotalCamo((prev) => prev + 1);
      setCamoArrayList((prev) => [...prev, "Reptile"]);
      console.log("set all camos finished");
    }
  };

  return {
    goldEffectRef,
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
    camoArrayList,
    setCamoArrayList,
  };
};
