import React, { useState } from "react";
import ExerciseList from "./ExerciseList";
import "./Body.scss";
import Modal from "./Modal";
import backdata from "../database/back.json";

const LowerBody = () => {
  const [values, setValues] = useState({
    name: "",
    set: 3,
    reps: 10,
    kg: 20,
  });
  const [todos, setTodos] = useState([{ values }]);
  const [modalState, setModalState] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const createTodo = () => {
    const todo = {
      name: values.name,
      reps: values.reps,
      kg: values.kg,
      set: values.set,
    };
    setTodos(todos.concat(todo));
    closeModal();
  };

  const onClick = (e) => {
    openModal();
  };

  const onChnageSet = (e) => {
    setValues({ ...values, set: values.set + Number(e.target.textContent) });
  };
  const onChangeNum = (e) => {
    setValues({ ...values, reps: values.reps + Number(e.target.textContent) });
  };
  const onChangeKg = (e) => {
    setValues({ ...values, kg: values.kg + Number(e.target.textContent) });
  };

  const onReset = (e) => {
    setValues({ ...values, [e.target.name]: 0 });
  };

  return (
    <>
      <div className="select">
        <form>
          <select onChange={onChange} name="name">
            <option key="0" value="" selected disabled hidden>
              운동을 선택해주세요.
            </option>
            {backdata.map((backdata) => {
              return (
                <option key={backdata.id} value={backdata.이름}>
                  {backdata.이름}
                </option>
              );
            })}
          </select>
        </form>
        <button className="start" onClick={onClick}>
          시작
        </button>
      </div>

      <div className="try">
        <div>
          <Modal data={values.name} state={modalState} closeModal={closeModal}>
            <div className="group">
              <h3>목표 세트 수 : {values.set} 회</h3>
              <div className="buttonGroup">
                <button onClick={onChnageSet} name="set">
                  +1
                </button>
                <button onClick={onChnageSet} name="set">
                  -1
                </button>
                <button onClick={onReset} name="set">
                  초기화
                </button>
              </div>
            </div>

            <div className="group">
              <h3>반복횟수 : {values.reps} 회</h3>
              <div className="buttonGroup">
                <button onClick={onChangeNum}>-1</button>
                <button onClick={onChangeNum}>-5</button>
                <button onClick={onChangeNum}>+5</button>
                <button onClick={onChangeNum}>+1</button>
                <button onClick={onReset} name="reps">
                  초기화
                </button>
              </div>
            </div>
            <div className="group">
              <h3>중량 : {values.kg} kg</h3>
              <div className="buttonGroup">
                <button onClick={onChangeKg}>-1</button>
                <button onClick={onChangeKg}>-5</button>
                <button onClick={onChangeKg}>-10</button>
                <button onClick={onChangeKg}>+10</button>
                <button onClick={onChangeKg}>+5</button>
                <button onClick={onChangeKg}>+1</button>
              </div>
            </div>
            <div className="buttonGroup">
              <button onClick={() => createTodo()}>추가</button>
              <button onClick={(e) => closeModal(e)}>취소</button>
            </div>
          </Modal>
        </div>
      </div>
      <ExerciseList todos={todos} />
    </>
  );
};

export default LowerBody;
