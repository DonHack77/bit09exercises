import React from "react";
import { Form, Button } from "react-bootstrap";

export const Start = () => {
  return (
    <>
      <h2>Start</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        eveniet velit consequuntur quaerat, ipsa reiciendis error incidunt sit
        esse quod aspernatur eum! Nostrum itaque sint eveniet tempora ex, veniam
        quia.
      </p>
      <Form.Select bg="danger" aria-label="">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Button variant="outline-danger">Primary</Button>
    </>
  );
};
