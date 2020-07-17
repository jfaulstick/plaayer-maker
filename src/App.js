import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import CreatePage from "./pages/create";
import MyStuffPage from "./pages/mystuff";
import PrintGolfers from "./pages/printCard";

import { GolferContext } from "./contexts/golfer";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      golfers: [],
    };

    this.deleteGolfer = this.deleteGolfer.bind(this);
  }

  componentWillMount() {
    this.fetchGolfers();
  }

  componentDidMount() {
    console.log("Golfers set to", this.state.golfers);
  }

  setGolfers(golfers) {
    this.setState({ golfers: golfers });
    localStorage.setItem("golfers", JSON.stringify(golfers));
  }

  fetchGolfers() {
    let storedGolfers = JSON.parse(localStorage.getItem("golfers"));
    this.setGolfers(storedGolfers);
    console.log("storedGolfers");
    console.log(storedGolfers);
  }

  deleteGolfer(item) {
    const index = this.state.golfers.indexOf(item);
    console.log(`Clicked deleteItem on item at index ${index}`);
    const golfers = this.state.golfers;
    const newGolfers = golfers.splice(index, 1);
    console.log(`Remaining golfers`, golfers);
    this.setState({ golfers: golfers });
    console.log(`this.state.golfers`, this.state.golfers);
    localStorage.setItem("golfers", JSON.stringify(this.state.golfers));
  }

  render() {
    return (
      <Router>
        <GolferContext.Provider value={this.state.golfers, this.setGolfers}>
          <div className="App">
            <Navbar bg="dark" expand="lg" variant="dark">
              <Navbar.Brand href="#home">PLAAYer Maker</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <NavDropdown title="Create" id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/create/hmg">
                      History Maker Golf
                    </Link>
                    {/* <Link className="dropdown-item" to="/create/hmb" disabled>
                    History Maker Baseball
                  </Link> */}
                  </NavDropdown>
                  <NavDropdown title="My Stuff" id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/mystuff/hmg">
                      History Maker Golf
                    </Link>
                    {/* <Link className="dropdown-item" to="/create/hmb" disabled>
                    History Maker Baseball
                  </Link> */}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Switch>
              <Route path="/create/:game">
                <CreatePage golfers={this.state.golfers} />
              </Route>
              <Route path="/mystuff/:game">
                <MyStuffPage
                  deleteGolfer={this.deleteGolfer}
                />
              </Route>
              <Route path="/print/:golfers">
                <PrintGolfers location={this.props.location} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </GolferContext.Provider>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
