import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
const Example = () => {
  return (
    <Navbar color="dark" expand="md">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
            style={{ color: "grey", fontSize: 18, marginRight: 10 }}
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
            className="navlink"
            style={{ color: "grey", fontSize: 18 }}
          >
            Users
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Example;
