/* eslint-disable */
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [dessert, dessert변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">DessertShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
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

      <Switch>
        <Route exact path="/">
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
                return <Card dessert={a} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail dessert={dessert} />
        </Route>

        <Route path="/:id">
          <div>아무거나</div>
        </Route>
      </Switch>
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
