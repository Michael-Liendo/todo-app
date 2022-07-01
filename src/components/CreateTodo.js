import Image from 'next/image';
import arrow from '../assets/Arrow.svg';

export default function CreateTodo() {
  return (
    <div className="flex">
      <input className="bg-[#25273C] p-4 w-96 h-14 rounded-l-3xl" />
      <button className="bg-[#5aff31cb] w-14 h-14 rounded-r-3xl">
        <Image className="fixed" src={arrow} alt="Arrow curve" width={40} />
      </button>
    </div>
  );
}
