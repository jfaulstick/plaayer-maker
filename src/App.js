import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import AlertBox from "./components/alert-box/alertBox";

import CreatePage from "./pages/create";
import MyStuffPage from "./pages/mystuff";
import PrintGolfers from "./pages/printCard";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      golfers: [],
      showAlert: false,
      alert: {
        variant: "",
        message: "",
      },
    };

    this.deleteGolfer = this.deleteGolfer.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  componentWillMount() {
    this.fetchGolfers();
  }

  componentDidMount() {
  }

  showAlert(variant, message) {
    this.setState({
      alert: { variant: variant, message: message },
      showAlert: true,
    });
  }

  closeAlert() {
    this.setState({ showAlert: false });
  }

  setGolfers(golfers) {
    this.setState({ golfers: golfers });
  }

  fetchGolfers() {
    let storedGolfers = JSON.parse(localStorage.getItem("golfers"));
    this.setGolfers(storedGolfers);
  }

  deleteGolfer(item) {
    const index = this.state.golfers.indexOf(item);
    const golfers = this.state.golfers;
    golfers.splice(index, 1);
    this.setState({ golfers: golfers });
    localStorage.setItem("golfers", JSON.stringify(this.state.golfers));
  }

  render() {
    return (
      <Router>
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
          <div className="d-flex justify-content-center">
            <AlertBox
              alert={this.state.alert}
              show={this.state.showAlert}
              closeAlert={this.closeAlert}
            />
          </div>

          <Switch>
            <Route path="/create/:game">
              <CreatePage
                golfers={this.state.golfers}
                showAlert={this.showAlert}
              />
            </Route>
            <Route path="/mystuff/:game">
              <MyStuffPage
                golfers={this.state.golfers}
                deleteGolfer={this.deleteGolfer}
                showAlert={this.showAlert}
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
