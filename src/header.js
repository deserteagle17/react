import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const style2 = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  paddingLeft: "1em",
  fontFamily: "Dancing Script",
  fontSize: "20px",
};

const Button = styled.button`
  padding-right: 1.3em;
  padding-left: 1.3em;
  font-family: "Dancing Script";
  font-size: 2em;
  background-color: yellow;
  border: none;
  color: blue;
  &:hover {
    cursor: pointer;
    transform: scale(0.8);
  }
`;

const Link1 = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 1.5em;

  &:hover {
    text-decoration: none;
    color: black;
    transform: scale(1.2);
  }
`;

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      var Y = window.scrollY;
      if (Y >= 375) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        style={{
          backgroundColor: scroll ? "transparent" : "red",
          height: "4em",
        }}
      >
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav style={style2} className="mr-auto">
            <Link1 to="/">We Cart</Link1>
            <Link1 to="about.js">About</Link1>
          </Nav>
        </Navbar.Collapse>
        <div>
          <Button>Cart</Button>
        </div>
      </Navbar>
      <img
        src="/image/1.jpg"
        style={{ width: "100%" }}
        alt="error-deseteagle"
      />
    </React.Fragment>
  );
}
