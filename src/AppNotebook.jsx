import React from 'react'; // , { useEffect }
import Button from 'react-bootstrap/Button';
import { useImmer } from 'use-immer';
import Add from './modals/Add.jsx';
import Rename from './modals/Rename.jsx';
import Remove from './modals/Remove.jsx';

const Note = (props) => {
  const [showRename, setShowRename] = React.useState(false);
  const [showRemove, setShowRemove] = React.useState(false);

  const toggleRenameModal = (_event) => {
    if (showRename) {
      setShowRename(false);
    } else {
      setShowRename(true);
    }
  };

  const toggleRemoveModal = (_event) => {
    if (showRemove) {
      setShowRemove(false);
    } else {
      setShowRemove(true);
    }
  };

  return (
    <>
      <div>
        <span className="mr-3">{props.text}</span>
        <button type="button" className="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename" onClick={toggleRenameModal}>rename</button>
        <button type="button" className="border-0 btn btn-link text-decoration-none" data-testid="item-remove" onClick={toggleRemoveModal}>remove</button>
      </div>
      { showRename ? <Rename idNote={props.idNote} text={props.text} onRename={props.onRename} onHide={toggleRenameModal} /> : null }
      { showRemove ? <Remove idNote={props.idNote} text={props.text} onRemove={props.onRemove} onHide={toggleRemoveModal} /> : null }
    </>
  );
}


const Notebook = (props) => {
  const [show, setShow] = React.useState(false);

  const toggleModal = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const [tasks, updateTasks] = useImmer([]);

  const createNote = (text) => {
    const newNote = { id: 1, text };
    if (tasks.length !== 0) {
      newNote.id = tasks[tasks.length - 1].id + 1;
    }

    const newTasks = [...tasks, newNote];
    updateTasks(newTasks);
  };

  const updateNote = (id, text) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    updateTasks((currTasks) => {
      currTasks[taskIndex].text = text;
    })
  };

  const removeNote = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    updateTasks(newTasks);
  };

  return (
    <>
      <div className="mb-3">
        <Button data-testid="item-add" variant="secondary" onClick={toggleModal}>add</Button>
      </div>
      { show ? <Add show={show} onHide={toggleModal} onAdd={createNote} /> : null }
      { tasks.map(({ id, text }) => <Note key={id} idNote={id} text={text} onRename={updateNote} onRemove={removeNote}/>) }
    </>
  );
};

export default Notebook;
