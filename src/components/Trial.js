import React from "react";

const Trial = ({ trial, reps, kg, key }) => {
  return (
    <div>
      Set {trial} : {kg}kg / {reps}회
    </div>
  );
};

export default Trial;
