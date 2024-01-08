import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be use inside an WorkoutContextProvider"
    );
  }

  return context;
};

export default useWorkoutsContext;
