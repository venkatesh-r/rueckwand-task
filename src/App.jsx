import { useState } from "react";
import "./styles/app.scss";
import Banner from "./components/Banner";
import SideBar from "./components/SideBar";
import data from "./data/material";

function App() {
  const [material, setMaterial] = useState(data);
  const updateMaterial = (id) => {
    setMaterial((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, on: true } : { ...item, on: false }
      )
    );
  };
  return (
    <div className="app-container">
      <Banner selected={material.find((m) => m.on)} />
      <SideBar material={material} updatematerial={updateMaterial} />
    </div>
  );
}

export default App;
