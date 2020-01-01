import React, {useContext} from 'react';
import NotesContext from '../context/notes-context';
import Note from './Note';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <div className="list">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}
      >
        {notes.map((note, i)=>( <Note key={note.title} note={note}/>))}
      </ReactCSSTransitionGroup>
    </div>
  ) 
};

export {NoteList as default}