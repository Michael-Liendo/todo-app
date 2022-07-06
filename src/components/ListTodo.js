import Image from 'next/image';
import { useEffect } from 'react';
import Check from '../assets/Check.svg';
import Line from '../assets/Line.svg';

export default function ListTodo({ toDos, setToDos }) {
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    setToDos(items);
  }, [setToDos]);

  function changeStatusTask(index) {
    let items = JSON.parse(localStorage.getItem('items'));
    items[index].completed = !items[index].completed;
    localStorage.setItem('items', JSON.stringify(items));
    setToDos(items);
  }

  return (
    <div className="flex justify-center mt-16">
      <div className="bg-[#25273C] w-full p-4 rounded-md sm:w-1/2">
        {toDos.map((todo, index) => {
          return (
            <div key={index}>
              {todo.completed ? (
                <div className="flex my-4">
                  <button
                    onClick={() => changeStatusTask(index)}
                    className="mr-2.5 bg-gradient-to-r from-[#E600FA] rounded-full px-1 pt-1"
                  >
                    <Image src={Check} alt="Arrow curve" />
                  </button>
                  <p className="ml-2.5">
                    <s>{todo.name}</s>
                  </p>
                </div>
              ) : (
                <div className="flex my-4">
                  <button
                    onClick={() => changeStatusTask(index)}
                    className="mr-2.5 grid place-items-center bg-slate-500 rounded-full px-1 py-3"
                  >
                    <Image src={Line} width={18} alt="Arrow curve" />
                  </button>
                  <p className="ml-2.5">{todo.name}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
