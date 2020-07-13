import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CreatePage from './pages/create';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" expand="lg" variant='dark' className='fixed-top'>
          <Navbar.Brand href="#home">PLAAYer Maker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/about">About</Link>
              <NavDropdown title="Create" id="basic-nav-dropdown">
                <Link className='dropdown-item' to="/create/hmg">History Maker Golf</Link>
                <Link className='dropdown-item' to="/create/hmb" disabled>
                  History Maker Baseball
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path='/create/:game'>
            <Create />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Create() {
  let { game } = useParams();
  console.log(`Game is ${game}`);

  return <CreatePage game={game} />;
}

export default App;
