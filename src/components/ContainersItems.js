import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import compose from "lodash/flowRight";
import Item from "./Item";
import {
  withCreateTask,
  withTask,
  withToggleTask,
  withRemoveTask,
  withUpdateTask,
} from "../backend/connect";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

Containers = compose(
  withTask,
  withToggleTask,
  withCreateTask,
  withRemoveTask,
  withUpdateTask
)(Containers);

function Containers({ tasks, toggleTask, createTask, removeTask, updateTask }) {
  const [text, setText] = useState({ _description: "" });
  const { dispatch } = useContext(AuthContext);

  const data = tasks;

  //capturamos el valor del input
  const hanledValueTask = ({ target }) => {
    setText({ _description: target.value });
  };

  // agregamos un nuevo item
  const hanledNewTask = ({ key }) => {
    if (key === "Enter") {
      createTask({ task: text._description });
    }
  };

  //cerramos secion
  const hanledLogout = () => {
    dispatch({
      type: types.logout,
    });
  };

  return (
    <>
      <Container className=" vh-100 d-flex justify-content-center align-items-center">
        <Row>
          <Col sm={12} className="bg-light box border rounded-3">
            <Button variant="primary" onClick={hanledLogout}>
              Logout
            </Button>
            <h1 className="text-center mt-4">Task List</h1>
            <Form.Control
              type="text"
              placeholder="New Task"
              onChange={hanledValueTask}
              onKeyPress={hanledNewTask}
              value={text._description}
            />
            <hr />
            {data.map((task) => {
              return (
                <Item
                  updateTask={updateTask}
                  removeTask={removeTask}
                  toggleTask={toggleTask}
                  key={task.id}
                  id={task.id}
                  text={task._description}
                  state={task.state}
                ></Item>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Containers;
