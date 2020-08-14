import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

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
    console.log("Golfers set to", this.state.golfers);
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
    this.setGolfers(storedGolfers || []);
    console.log("this.state.golfers", this.state.golfers);
  }

  deleteGolfer(item) {
    const index = this.state.golfers.indexOf(item);
    console.log(`Clicked deleteItem on item at index ${index}`);
    const golfers = this.state.golfers;
    golfers.splice(index, 1);
    console.log(`Remaining golfers`, golfers);
    this.setState({ golfers: golfers });
    console.log(`this.state.golfers`, this.state.golfers);
    localStorage.setItem("golfers", JSON.stringify(this.state.golfers));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MDBNavbar color="unique-color-dark" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">PLAAYer Maker</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">Create</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right>
                      <MDBDropdownItem href="/create/hmg">History Maker Golf</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">My Stuff</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="/mystuff/hmg">History Maker Golf</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

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
