import "./App.css";
import Navbar from "./Navbar";
import AR_LIST from "./Guns/AR/AR_list";
import { useState } from "react";
import LoadingCircle from "./Guns/Completion/LoadingCircle";
import damascusProgressProvider from "./damascusContext";

function App() {
  return (
    <div className="App">
      <damascusProgressProvider>
        <Navbar />
        <LoadingCircle />
        <div>
          <h1>Weapons</h1>
          <AR_LIST />
        </div>
        <div>
          <h1>Medals</h1>
        </div>
      </damascusProgressProvider>
    </div>
  );
}

export default App;
