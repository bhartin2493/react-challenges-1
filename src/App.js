import Header from "./components/common/Header";
import ShowHideTitle from "./components/hooks/ShowHideTitle";
import Stopwatch from "./components/hooks/Stopwatch";
import ProgressBar from "./components/hooks/ProgressBar";
import TodoList from "./components/hooks/TodoList";
import SubmitFormData from "./components/hooks/SubmitFormData";

import "./App.css";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <ShowHideTitle />
      {/* <Stopwatch /> */}
      {/* <ProgressBar/> */}
      {/* <TodoList/> */}
      {/* <SubmitFormData/> */}
    </div>
  );
}


export default App;
