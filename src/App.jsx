import { Route, Routes } from 'react-router-dom';
import './App.css'
import Aside from './components/Aside/Aside';
import TodoListContainer from './containers/TodoListContainer'
import TodoImportant from "../src/pages/TodoImportant/TodoImportant"
import TodoDeleted from "../src/pages/TodoDeleted/TodoDeleted"
import TodoComplited from './pages/TodoComplited/TodoComplited';
function App() {

  return (
    <div className="App">
      <Aside />
      <Routes>
        <Route path='/important' element={<TodoImportant />} />
        <Route path='/deleted' element={<TodoDeleted />} />
        <Route path='/' element={<TodoListContainer />} />
        <Route path='/complited' element={<TodoComplited />} />
      </Routes>
    </div>
  )
}

export default App;
