import "./App.css";
import TodoList from "./components/TodoList";
import { TodosContext } from "./contexts/todosContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type User = {
  id: string;
  title: string;
  details: string;
  isCompleted: boolean;
};
const MainTodos: User[] = [
  {
    id: uuidv4(),
    title: "Read a Book",
    details: "One Book",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Read a Book",
    details: "One Book",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Read a Book",
    details: "One Book",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState<User[]>(MainTodos);
  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#191b1f",
        height: "100vh",
      }}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
