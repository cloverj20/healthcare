import React, { useState } from "react";
import TrialList from "./TrialList";
import CheckIntensity from "./CheckIntensity";
import "./ExModal.scss";

const ExModal = ({
  name,
  set,
  reps,
  kg,
  open,
  closeExModal,
  completeExModal,
}) => {
  const [trial, setTrial] = useState(1);
  const [values, setValues] = useState([{ trial, reps, kg }]);
  const [bgColor, setBgColor] = useState();
  const [standardValue, setStandardValue] = useState({
    reps,
    kg,
  });
  const [openModal3, setOpenmodal3] = useState(false);
  const openIntense = () => {
    setOpenmodal3(true);
  };
  const checkTrial = () => {
    if (trial === set) {
      closeExModal();
      setOpenmodal3(false);
      completeExModal();
    } else {
      setTrial(trial + 1);
    }
  };
  const onClick = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    const value = {
      trial: trial,
      reps: standardValue.reps + parseInt(id / 2) * 5,
      kg: standardValue.kg + id * 5,
    };
    setValues(values.concat(value));
    setStandardValue({
      reps: standardValue.reps + parseInt(id / 2) * 5,
      kg: standardValue.kg + id * 5,
    });
    setOpenmodal3(false);
  };
  return open ? (
    <div>
      <div className="ExModal">
        <h1>{name}</h1>
        <h2>
          {trial} / {set}Set
        </h2>
        <TrialList values={values} />
        <CheckIntensity isOpen={openModal3}>
          <h4>운동은 어떠셨나요?</h4>
          <ul>
            <li id={-2} onClick={onClick} style={{ backgroundColor: "red" }}>
              너무 힘들었어요
            </li>

            <li id={-1} onClick={onClick} style={{ backgroundColor: "pink" }}>
              조금 힘들었어요
            </li>
            <li id={0} onClick={onClick} style={{ backgroundColor: "white" }}>
              적당했어요
            </li>
            <li
              id={1}
              onClick={onClick}
              style={{ backgroundColor: "lightgreen" }}
            >
              조금 쉬웠어요
            </li>
            <li id={2} onClick={onClick} style={{ backgroundColor: "green" }}>
              너무 쉬웠어요
            </li>
          </ul>
        </CheckIntensity>

        <button
          onClick={() => {
            openIntense();
            checkTrial();
          }}
        >
          {trial !== set ? "다음 세트로" : "수고하셨습니다!"}
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ExModal;
