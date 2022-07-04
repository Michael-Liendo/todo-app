import CreateTodo from '../components/CreateTodo';
import ListTodo from '../components/ListTodo';

export default function Home() {
  return (
    <>
      <h1 className="text-6xl text-left m-7 tracking-widest">TODO</h1>

      <div>
        <CreateTodo />
      </div>
      <div>
        <ListTodo />
      </div>
    </>
  );
}
