import Image from 'next/image';
import { useState } from 'react';
import arrow from '../assets/Arrow.svg';

export default function CreateTodo({ setToDos }) {
  let [inputValue, setInputValue] = useState('');
  let [error, setError] = useState(false);

  function setValue(event) {
    setInputValue(event.target.value);
  }

  function newTodo(event) {
    event.preventDefault();
    if (!inputValue) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }
    if (inputValue.length >= 50) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    setInputValue('');
    let todoItems = JSON.parse(localStorage.getItem('items'));

    const todo = {
      name: inputValue,
      completed: false,
    };

    if (todoItems) {
      let arrayOfTodos = [...todoItems, todo];
      localStorage.setItem('items', JSON.stringify(arrayOfTodos));
      setToDos(arrayOfTodos);
    } else {
      let arrayOfTodos = [todo];
      localStorage.setItem('items', JSON.stringify(arrayOfTodos));
      setToDos(arrayOfTodos);
    }
  }

  return (
    <>
      {error ? (
        <p className="text-red-700 text-center">
          Hey! You have not put a task or it has more than 50 characters
        </p>
      ) : (
        <p className="text-transparent">.</p>
      )}
      <form className="flex justify-center">
        <input
          id="todo"
          onChange={setValue}
          placeholder="Create a new ToDo..."
          value={inputValue}
          className="bg-[#25273C] focus:outline-none border-dashed border-2 border-sky-500 text-[#ffffffb9] p-4 w-96 h-14 rounded-l-3xl"
          required
        />
        <button
          onClick={newTodo}
          className="transition duration-500 hover:scale-110 bg-[#5aff31cb] w-14 h-14 rounded-r-3xl"
        >
          <Image className="fixed" src={arrow} alt="Arrow curve" height={40} />
        </button>
      </form>
    </>
  );
}
