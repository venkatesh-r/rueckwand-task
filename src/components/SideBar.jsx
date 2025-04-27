import React from "react";

const SideBar = () => {
  return (
    <div style={{ border: "solid 1px #ccc", width: "45%", marginLeft: "20px" }}>
      <div className="form-wrapper">
        <h2>Distance for Circle</h2>
        <form>
          <input type="number" />
          <input type="number" />
          <button className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="material-wrapper">
        <h2>Material Selection</h2>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
};

export default SideBar;
