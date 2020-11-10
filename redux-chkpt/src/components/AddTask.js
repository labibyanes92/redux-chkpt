import React, { useState } from "react";
import { Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggle } from "../JS/actions/actionTask";

const AddTask = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const filtred = useSelector((state) => state.filtred);

  const add = (e) => {
    e.preventDefault();
    dispatch(addTask({ text: text, isDone: false, id: Date.now() }));
    setText("");
  };

  return (
    <Card bg="primary">
      <Card.Body>
        <h1 className={"text-white"}>To-Do-App !</h1>

        <Form onSubmit={add}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={add}>
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button
          variant="info"
          className="mr-3"
          onClick={() => dispatch(toggle())}
        >
          {filtred ? "ALL" : "isDone"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddTask;