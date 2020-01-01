import React, { useEffect } from 'react';

const Note = ({note, removeNote}) => {
  useEffect(()=>{
    console.log('Setting up effect');
    return () => {
      console.log('cleaning up effect.')
    }
  }, [] );

  return (
       <div >
         <h3>{note.title}</h3>
         <h4>{note.body}</h4>
         <button onClick={()=>removeNote(note.title)}>X</button>
       </div>
  );
};

export default Note;