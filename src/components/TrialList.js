import React from "react";
import Trial from "./Trial";

const TrialList = ({ values }) => {
  return (
    <div className="trialList">
      {values.map(({ trial, reps, kg }) => (
        <Trial trial={trial} key={trial} reps={reps} kg={kg} />
      ))}
    </div>
  );
};

export default TrialList;
