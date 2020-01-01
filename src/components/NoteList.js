import React from 'react';
import Note from './Note';

const NoteList = ({notes, removeNote}) => {
  return notes.map((note, i)=>( <Note note={note} removeNote={removeNote}/>))
};

export {NoteList as default}