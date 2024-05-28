import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import "./App.css";

//
let currK;
let curK = 23;
function App() {
  const [taskList, SetTaskList] = useState([
    { tsk: "Task Example initial ", id: Date.now() },
  ]);
  const [btnTxt, SetBtnTxt] = useState("SUBMIT");
  const [inTxt, SetInTxt] = useState("");
  const onS = (e) => {
    e.preventDefault();
    const val = e.currentTarget.childNodes[0].childNodes[1].value;
    if (btnTxt === "SUBMIT") {
      SetTaskList([...taskList, { tsk: val, id: Date.now() }]);
    } else {
      SetTaskList(
        taskList.map((x) => {
          return { tsk: x.id === currK ? val : x["tsk"], id: x["id"] };
        })
      );
      SetBtnTxt("SUBMIT");
    }
  };
  const getEditTxt = (txt) => {
    console.log("right now", txt);
    SetBtnTxt("EDIT");
    SetInTxt(txt);
  };
  const edTodo = (e, keye) => {
    console.log("inside Edit", keye);
    currK = keye;
    getEditTxt(taskList.filter((x) => x.id === keye)[0].tsk);
  };
  const delTodo = (e, keye) => {
    console.log("inside delete", keye);
    SetTaskList(taskList.filter((x) => x.id !== keye));
  };
  return (
    <div className="mainDiv">
      <header>This is Header</header>
      <AddTask f={onS} btnTxt={btnTxt} inTxt={inTxt}></AddTask>
      <TodoList list={taskList} edTodo={edTodo} delTodo={delTodo}>
        {" "}
      </TodoList>
    </div>
  );
}

export default App;
