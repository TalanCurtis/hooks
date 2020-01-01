import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// /*
const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ]);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note)=>note.title !==title));
  };

  useEffect(()=>{
   const notesData = JSON.parse(localStorage.getItem('notes'));
   if ( notesData ){
    setNotes(notesData);
   }
  }, []);

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return(
   <div>
     <h1>note app</h1>
     {notes.map((note, i)=>(
       <div key={i}>
         <h3>{note.title}</h3>
         <h4>{note.body}</h4>
         <button onClick={()=>removeNote(note.title)}>X</button>
       </div>
     ))}
     <p> Add Note</p>
     <form onSubmit={addNote}>
       <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
       <textarea value={body} onChange={(e)=>setBody(e.target.value)}/>
       <button>add note</button>
     </form>
   </div>
  );
};
//*/


/*
const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText ] = useState(''); 

  // useEffect second arg is an array to trigger only when something specific changes.
  useEffect(()=>{
    console.log("hellow");
    document.title = count;
  }, [count]);

  useEffect(()=>{
    // used for fetching data. like component did mount.
    console.log("this should only run once");
  }, []);


  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(props.count);
  };

  return (
    <div>
      <p>The current { text || 'count' } is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={text} onChange={(e)=>setText(e.target.value)}></input>
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

//*/

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();