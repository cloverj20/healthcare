import Exercise from "./Exercise";
import "./ExerciseList.scss";

const ExerciseList = ({ todos }) => {
  return (
    <div className="exerciseList">
      {todos.map(({ name, reps, set, kg }) => (
        <Exercise name={name} key={name} reps={reps} set={set} kg={kg} />
      ))}
    </div>
  );
};

export default ExerciseList;
