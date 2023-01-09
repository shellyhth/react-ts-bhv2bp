import * as React from 'react';
import './style.css';

export default function App() {
  const [title, setTitle] = React.useState('before');
  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.title);
        setTitle(res.title);
      });
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={fetchData}>click here</button>

    </div>
  );
}
