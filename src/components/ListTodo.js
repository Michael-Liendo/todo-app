import { useEffect, useState } from 'react';

export default function ListTodo() {
  let [toDos, setToDos] = useState([]);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('items'));
    setToDos(items);
  }, []);

  return (
    <>
      <h2>ToDos</h2>
      {/* TODO: make a figma design */}
      {toDos.map((item) => {
        return <p key={item.name}>{item.name}</p>;
      })}
    </>
  );
}
