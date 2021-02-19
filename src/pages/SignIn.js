import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { signInUser } from "../services/Auth";

export const SignIn = (props) => {
  const { signIn, dispatch } = useContext(GlobalContext);
  const history = useHistory();

  const [{ email, password }, setState] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInUser({ email, password });

      dispatch(signIn(user));

      history.replace({ pathname: "/" });
    } catch (error) {
      alert(error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Form onSubmit={onSubmit}>
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
      <Button type="submit">Login</Button>
      <Link className="btn btn-primary" to="/add">
        Sign Up
      </Link>
    </Form>
  );
};
