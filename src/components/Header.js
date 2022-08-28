import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import Logoimage from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Image size="mini" src={Logoimage} style={{ marginRight: "1.5em" }} />
          Pizza
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} position="right" to="Cart">
          <i class="shop icon"></i>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
