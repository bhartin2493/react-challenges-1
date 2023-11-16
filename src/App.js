import Header from './components/common/Header';
import ShowHideTitle from './components/hooks/ShowHideTitle';
import Stopwatch from './components/hooks/Stopwatch';
import MaxCount from './components/hooks/MaxCount';
import ProgressBar from './components/hooks/ProgressBar';
import TodoList from './components/hooks/TodoList';
import SubmitFormData from './components/hooks/SubmitFormData';

import './App.css';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ShowHideTitle /> */}
      <Stopwatch />
      {/* <MaxCount/>
      <ProgressBar/>
      <TodoList/>
      <SubmitFormData/> */}
    </div>
  );
}

// const appRouter = createBrowserRouter([
//   {
//     path : "/",
//     element : <App/>,
//     children : [
      
//     ]
//   }
// ])

export default App;
