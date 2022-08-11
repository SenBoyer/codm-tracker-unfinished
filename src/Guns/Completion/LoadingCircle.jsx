import React from "react";
import "./LoadingCircle.css";
import { useEffect, useState, useContext } from "react";
import { damascusProgress } from "../../damascusContext";

function LoadingCircle({ demascusPercent }) {
  //SIZE DRAGGER
  // const [size, setSize] = useState();

  // function setColor(newColor) {
  //   document.documentElement.style.setProperty("--background-color", newColor);
  // }

  // function handleOSizeChange(event) {
  //   setSize(event.currentTarget.value);
  //   document.documentElement.style.setProperty("--width-size", `${size}px`);
  //   console.log("size=", size);
  // }

  // useEffect(() => {
  //   const color = getComputedStyle(document.documentElement).getPropertyValue(
  //     "--background-color"
  //   );
  //   console.log(color);
  // }, [size]);

  let { count, damascusPercent } = useContext(damascusProgress);

  return (
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full">
          <div className="fill"></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
        </div>
        <div className="inside-circle"> {Math.round(count * 100) / 100}% </div>
      </div>
    </div>

    // SIZE DRAGGER
    // <>
    //   <p>
    //     <input
    //       name="size"
    //       placeholder="try here"
    //       onChange={handleOSizeChange}
    //     />
    //   </p>
    //   <div className="dynamic-test">Hello</div>;
    //   <p>
    //     <button onClick={() => setColor("orange")}>orange</button>
    //     <button onClick={() => setColor("blueviolet")}>blueviolet</button>
    //     <button onClick={() => setColor("red")}>red</button>
    //   </p>
    // </>
  );
}

export default LoadingCircle;
