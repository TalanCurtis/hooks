import React, { useEffect, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';


const Note = ({note}) => {

  const {dispatch} = useContext(NotesContext);
  const position = useMousePosition();

  useEffect(()=>{
    console.log('Setting up effect');
    return () => {
      console.log('cleaning up effect.')
    };
  }, [] );

  return (
       <div className="list-item">
         <h3>{note.title}</h3>
         <h4>{note.body}</h4>
         <p>{position.x}, {position.y} </p>
         <button onClick={()=>dispatch({type:'REMOVE_NOTE', title: note.title})}>X</button>
       </div>
  );
};

export default Note;