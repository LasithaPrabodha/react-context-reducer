import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

export const AddUser = () => {
  const { addUser, dispatch } = useContext(GlobalContext);

  const [{ fname, lname, email, password }, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      fname,
      lname,
      email,
      password,
    };
    dispatch(addUser(newUser));
    history.push("/");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          type="text"
          value={fname}
          name="fname"
          onChange={onChange}
          placeholder="Enter first name"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          type="text"
          value={lname}
          name="lname"
          onChange={onChange}
          placeholder="Enter last name"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Enter email address"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Enter password"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
