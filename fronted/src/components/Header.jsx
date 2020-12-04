import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
`;

const NavbarTitle = styled.li`
  a {
    text-decoration: none;
    color: rgb(31, 27, 27);
    font-size: 2em;
    font-weight: 800;
  }
  
`;

const NavbarItems = styled.li`
.login {
    background-color: blue;
    border: 1px solid blue;
    border-radius: 9px;
  }
`'

const Header = () => (
  <>
    <Navbar>
      <NavbarTitle>
        <Link to="/">DEV Blog</Link>
      </NavbarTitle>
      <NavbarItems>
        <Link to="/" className="login">login</Link>
      </NavbarItems>
    </Navbar>
  </>
);

export default Header;
