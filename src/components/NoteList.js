import React, {useContext} from 'react';
import NotesContext from '../context/notes-context';
import Note from './Note';

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return notes.map((note, i)=>( <Note key={i} note={note}/>))
};

export {NoteList as default}