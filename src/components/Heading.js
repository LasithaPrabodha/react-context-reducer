import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export const Heading = () => {
  const { logOut, dispatch } = useContext(GlobalContext);

  const onLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add User
            </Link>

            <Button onClick={onLogOut}>Logout</Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
