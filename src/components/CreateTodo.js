import Image from 'next/image';
import arrow from '../assets/Arrow.svg';

export default function CreateTodo() {
  return (
    <div className="flex">
      <input
        placeholder="Create a new ToDo..."
        className="bg-[#25273C] focus:outline-none border-dashed border-2 border-sky-500 text-[#ffffffb9] p-4 w-96 h-14 rounded-l-3xl"
      />
      <button className="transition duration-500 hover:scale-110 bg-[#5aff31cb] w-14 h-14 rounded-r-3xl">
        <Image className="fixed" src={arrow} alt="Arrow curve" height={40} />
      </button>
    </div>
  );
}
