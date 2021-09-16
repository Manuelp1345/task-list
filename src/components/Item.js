import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Item({ id, text, state: status, removeTask, updateTask, reloadTask }) {
  const [state, setstate] = useState(status);
  const [edit, setEdit] = useState(false);
  const [newText, setText] = useState(text);

  //cambiamos el estado del item
  const hanledChangeCheck = () => {
    fetch("https://api.8base.com/cktkpyrbz00lt06jycm663jhk/webhook/getTasks", {
      method: "POST",
      body: JSON.stringify({ id, state: !state }),
    });
    setstate(!state);
  };

  //Eliminamos el items con un id en espesifico
  const hanledRemoveItem = () => {
    removeTask(id);
  };
  const hanledEditItem = () => {
    setEdit(!edit);
  };

  //capturamos los cambios en el input
  const hanledValueTask = ({ target }) => {
    setText(target.value);
  };

  //realizamos la actualiacion del item
  const hanledEditTask = ({ key }) => {
    if (key === "Enter") {
      updateTask({ id, task: newText });
      setEdit(!edit);
    }
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between border rounded-3 p-4 m-2">
        <div className="d-flex flex-row justify-content-center align-items-center fw-bold">
          <Form.Check
            aria-label="option 1"
            className="me-2 fs-4 "
            checked={state}
            onChange={hanledChangeCheck}
          />
          {!edit ? (
            <p className="p-0 m-0">{text}</p>
          ) : (
            <Form.Control
              type="text"
              placeholder={text}
              value={newText}
              onKeyPress={hanledEditTask}
              onChange={hanledValueTask}
            />
          )}
        </div>
        <div id={id} className="d-flex flex-row justify-content-between me-2">
          <DropdownButton id="dropdown-basic-button" title="Options">
            <Dropdown.Item href="#/action-1" onClick={hanledEditItem}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={hanledRemoveItem}>
              Delete
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
}

export default Item;
