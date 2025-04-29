import React from "react";
import CircleInput from "./CircleInput";

const SideBar = ({ material, updatematerial }) => {
  return (
    <div
      style={{ border: "solid 1px #ccc", width: "27.8%", marginLeft: "auto" }}
    >
      <div className="material-wrapper">
        <h2>Material Selection</h2>
        {material.map((val) => (
          <span onClick={() => updatematerial(val.id)} key={val.id}>
            {val.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
