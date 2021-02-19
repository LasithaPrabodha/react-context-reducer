import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { signUpUser } from "../services/Auth";

export const AddUser = (props) => {
  const { signUp, dispatch } = useContext(GlobalContext);

  const [{ firstName, lastName, email, password }, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const user = await signUpUser(newUser);

      dispatch(signUp(user));
      history.goBack();
    } catch (error) {
      alert(error);
    }
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
          value={firstName}
          name="firstName"
          onChange={onChange}
          placeholder="Enter first name"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          type="text"
          value={lastName}
          name="lastName"
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
