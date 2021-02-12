import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
  const { editUser, users, dispatch } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const user = users.find((user) => user.id === currentUserId);
    setSelectedUser(user);
  }, [currentUserId, users]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setSelectedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(selectedUser));
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          type="text"
          value={selectedUser.fname}
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
          value={selectedUser.lname}
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
          value={selectedUser.email}
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
          value={selectedUser.password}
          onChange={onChange}
          placeholder="Enter password"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
