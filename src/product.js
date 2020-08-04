import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card } from "react-bootstrap/";
// import A1 from "./proimg1.js";

const Nutton = styled(Button)`
  &:hover {
    transform: scale(1.1);
  }
`;
const Futton = styled(Button)`
  padding: 10px;
  margin: 10px;
  width: 20%;

  &:disabled {
    background-color: white;
    color: black;
    border: none;
  }
`;

export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      incart: false,
      count: 0,
    };
    this.carted = this.carted.bind(this);
    this.man = this.man.bind(this);
  }

  carted() {
    this.setState((prevState) => {
      if (prevState.count === 0) {
        return {
          count: prevState.count + 1,
          incart: !prevState.incart,
        };
      } else {
        return { count: prevState.count + 1 };
      }
    });
  }

  man(event) {
    if (event.target.value === "+") {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    } else {
      this.setState((prevState) => {
        if (prevState.count === 1) {
          return {
            count: prevState.count - 1,
            incart: !prevState.incart,
          };
        } else {
          return {
            count: prevState.count - 1,
          };
        }
      });
    }
  }

  render() {
    return (
      <Col lg={4} sm={6} xs={12}>
        <Card
          onClick={this.rerr}
          style={{
            textAlign: "center",
            margin: "1.3em",
            maxHeight: "400px",
            minHeight: "400px",
            border: "none",
          }}
        >
          <Card.Body>
            <Card.Img
              style={{
                width: "100%",
                minHeight: "150px",
                maxHeight: "150px",
              }}
              src={this.props.img}
            />
            <Card.Title>
              <h3 style={{ overflow: "hidden" }}>{this.props.name}</h3>
            </Card.Title>
            <Card.Text>
              <p>{this.props.detail}</p>
            </Card.Text>
            <Nutton
              onClick={this.carted}
              variant="danger"
              disabled={this.state.incart ? true : false}
            >
              ADD to CART
            </Nutton>
            <br />
            <br />
            <div
              style={{
                display: this.state.count > 0 ? "block" : "none",
                width: "auto",
              }}
            >
              <Futton onClick={this.man} value="+" variant="outline-danger">
                +
              </Futton>
              <Futton disabled>{this.state.count}</Futton>
              <Futton onClick={this.man} variant="outline-danger" value="-">
                -
              </Futton>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
