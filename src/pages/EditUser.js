import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updateUser } from "../services/User";

export const EditUser = (props) => {
  const { editUser, users, dispatch } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const user = users.find((user) => user.id === +currentUserId);
    setSelectedUser(user);
  }, [currentUserId, users]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setSelectedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = await updateUser(selectedUser);

    dispatch(editUser(user));
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          type="text"
          value={selectedUser.firstName}
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
          value={selectedUser.lastName}
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
          value={selectedUser.email}
          onChange={onChange}
          placeholder="Enter email address"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Edit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
