import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="navbar-container">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">TV Shows</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Reality Shows</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">TV Series</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Movies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Original</NavLink>
          </NavItem>
        </Nav>
        <NavbarText className="p-3 search-icon-container">
          <SearchOutlined className="search-icon" />
        </NavbarText>
        <NavbarText>
          <Button className="login-button">Sign in</Button>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default Header;