import { useState } from 'react';
import CreateTodo from '../components/CreateTodo';
import ListTodo from '../components/ListTodo';

export default function Home() {
  let [toDos, setToDos] = useState([]);
  return (
    <>
      <h1 className="text-6xl text-left m-7 tracking-widest">TODO</h1>

      <div>
        <CreateTodo setToDos={setToDos} />
      </div>
      <div>
        <ListTodo toDos={toDos} setToDos={setToDos} />
      </div>
    </>
  );
}
