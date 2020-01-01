import React, { useEffect, useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = ({note}) => {

  const {dispatch} = useContext(NotesContext);

  useEffect(()=>{
    console.log('Setting up effect');
    return () => {
      console.log('cleaning up effect.')
    };
  }, [] );

  return (
       <div >
         <h3>{note.title}</h3>
         <h4>{note.body}</h4>
         <button onClick={()=>dispatch({type:'REMOVE_NOTE', title: note.title})}>X</button>
       </div>
  );
};

export default Note;