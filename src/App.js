/* eslint-disable */
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail";
import axios from "axios";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [dessert, dessert변경] = useState(Data);
  let [loading, loading변경] = useState(true);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">DessertShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
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

            {loading === true ? (
              <div>
                <p>로딩중입니다~</p>
              </div>
            ) : null}

            <button
              className="btn btn-primary"
              onClick={() => {
                loading변경(true);
                axios.post("서버URL", { id: "codingapple", pw: 1234 });

                axios
                  .get("http://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    loading변경(false);
                    console.log(result.data);
                    dessert변경([...dessert, ...result.data]);
                  })
                  .catch(() => {
                    loading변경(false);
                    console.log("실패");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail dessert={dessert} 재고={재고} 재고변경={재고변경} />
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
