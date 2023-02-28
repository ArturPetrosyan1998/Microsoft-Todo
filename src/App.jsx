import { Route, Routes } from 'react-router-dom';
import './App.css'
import Aside from './components/Aside/Aside';
import TodoListContainer from './containers/TodoListContainer'
import TodoImportant from "../src/pages/TodoImportant/TodoImportant"
import TodoDeleted from "../src/pages/TodoDeleted/TodoDeleted"
import TodoList from './pages/TodoList/TodoList';
function App() {

  return (
    <div className="App">
      <Aside />
      <Routes>
        <Route path='/important' element={<TodoImportant />} />
        <Route path='/deleted' element={<TodoDeleted />} />
        <Route path='/' element={<TodoListContainer />} />
      </Routes>
    </div>
  )
}

export default App;
