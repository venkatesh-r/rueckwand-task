import React from "react";

const SideBar = ({ material, updatematerial }) => {
  return (
    <div className="material-container">
      <div className="material-wrapper">
        <h2>Material Selection</h2>
        {material?.map((val) => (
          <span
            data-testid={`material-${val.id}`}
            onClick={() => updatematerial(val.id)}
            key={val.id}
          >
            {val.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
