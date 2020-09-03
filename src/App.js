import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo'
import { Button, Input, InputLabel, FormControl } from '@material-ui/core';
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
    /* eslint-disable-next-line */
    
  useEffect(() => {
    db.collection('todo').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().text))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todo').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    /* eslint-disable-next-line */
    <div className="App">
      <h1>Hello Programmers {1+1} </h1>
      <form action="submit">
      <FormControl>
        <InputLabel>✅  Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value) }/>
      </FormControl>
       <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;