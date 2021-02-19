import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { deleteUser, getUsers } from "../services/User";

export const UserList = () => {
  const { users, removeUser, setUsers, loggedInUser, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (!users.length) {
      try {
        getUsers().then((users) => {
          dispatch(setUsers(users));
        });
      } catch (error) {}
    }
  }, []);

  const onDelete = async (id) => {
    try {
      await deleteUser(id);

      dispatch(removeUser(id));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        users.map((user) => (
          <ListGroupItem className="d-flex" key={user.id}>
            <strong>
              {user.firstName} {user.lastName}
            </strong>
            <div className="ml-auto">
              <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">
                Edit
              </Link>
              <Button disabled={loggedInUser.email === user.email} onClick={() => onDelete(user.id)} color="danger">
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </ListGroup>
  );
};
