/* eslint-disable */
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";

function App() {
  let [dessert, dessert변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">DessertShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="background">
        <h1>Yummy Dessert</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          {dessert.map((a, i) => {
            return <Card dessert={dessert[i]} i={i} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"/assests/dessert" + (props.i + 1) + ".jpg"} width="100%" />
      <h4>{props.dessert.title}</h4>
      <p>
        {props.dessert.content} & {props.dessert.price}
      </p>
    </div>
  );
}

export default App;
