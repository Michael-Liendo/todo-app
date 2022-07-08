import Head from 'next/head';
import { useState } from 'react';
import CreateTodo from '../components/CreateTodo';
import ListTodo from '../components/ListTodo';

export default function Home() {
  let [toDos, setToDos] = useState([]);
  return (
    <>
      <Head>
        <title>To-Do</title>
        <meta property="og:title" content="To-Do" />

        <meta property="og:description" content="To-do app" />

        <meta property="og:site_name" content="To-Do" />
        <meta property="og:url" content="https://to-do.michaelliendo.com" />

        <meta property="og:type" content="website" />

        <meta
          name="keywords"
          content="todo, to-do, todo app, to-do app, michael liendo to-do, todos, to-dos"
        />

        <meta rel="canonical" href="https://michaelliendo.com/" />

        <meta name="robots" content="follow" />
        <meta name="author" content="Michael Liendo" />
        <meta name="copyright" content="Michael Liendo" />
      </Head>
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
