import "./App.css";
import Navbar from "./Navbar";
import AR_LIST from "./Guns/AR/AR_list";
import { useState } from "react";
import LoadingCircle from "./Guns/Completion/LoadingCircle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoadingCircle />
      <div>
        <h1>Weapons</h1>
        <AR_LIST />
      </div>
      <div>
        <h1>Medals</h1>
      </div>
    </div>
  );
}

export default App;
