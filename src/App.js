import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';

function App() {
  // if status true => job is done, else job is still active
  const [list, setList] = useState([{ id: 0, todo: "wfsdfsdf", status: true }, { id: 1, todo: "fsdfsdf", status: false }])

  return (
    <div className="todoapp">
      <h1 className="header">Todos</h1>
      <AddItem list={list} setList={setList} />
      {list.length > 0 && <List list={list} setList={setList} />}
    </div>
  );
}

export default App;
