import React, { useState } from "react";
import "./Exercise.scss";
import ExModal from "./ExModal";

const Exercise = ({ name, set, reps, kg }) => {
  const [over, setOver] = useState(false);
  const [open, setOpen] = useState(false);
  const openExModal = () => {
    setOpen(!open);
  };

  const closeExModal = () => {
    setOpen(false);
  };
  const exComplete = () => {
    setOver(true);
  };
  return name === undefined ? (
    <></>
  ) : (
    <div className="form">
      <span>{name}</span>
      <button className="start" onClick={openExModal}>
        {over ? "운동 결과 보기" : "운동 시작하기"}
      </button>
      <ExModal
        set={set}
        name={name}
        reps={reps}
        kg={kg}
        open={open}
        closeExModal={closeExModal}
        completeExModal={exComplete}
      ></ExModal>
    </div>
  );
};

export default Exercise;
