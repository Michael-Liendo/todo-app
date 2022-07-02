import CreateTodo from '../components/CreateTodo';

export default function Home() {
  return (
    <>
      <h1 className="text-6xl text-left m-7">TODO</h1>

      <div>
        <CreateTodo />
      </div>
    </>
  );
}
