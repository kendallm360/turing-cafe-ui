import React from "react";
import "./Resys.css";

const Resys = ({ id, key, name, date, time, number }) => {
  return (
    <div className="resys">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancel">Cancel</button>
    </div>
  );
};

export default Resys;
