import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUser, getUsers, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    !users.length && dispatch(getUsers());
  }, []);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        users.map((user) => (
          <ListGroupItem className="d-flex" key={user.id}>
            <strong>
              {user.fname} {user.lname}
            </strong>
            <div className="ml-auto">
              <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">
                Edit
              </Link>
              <Button onClick={() => dispatch(removeUser(user.id))} color="danger">
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
