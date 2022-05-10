import React from "react";
import "./CheckIntensity.scss";
const CheckIntensity = ({ isOpen, children }) => {
  return isOpen ? <div className="modal3">{children}</div> : <></>;
};

export default CheckIntensity;
