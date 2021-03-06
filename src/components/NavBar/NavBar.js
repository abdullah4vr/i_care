import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
class  NavBar extends Component{
    render()
    {
        return (
            
            <Navbar bg="light" expand="lg">
            <Navbar.Brand ><NavLink to ="/"
            activeClassName="my-active"
            activeStyle={{
                textDecoration: 'None'
            }}>iCare</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">MyIssues</Nav.Link>
                <Nav.Link><NavLink to="/addIssue">Add Issue</NavLink></Nav.Link>
                <NavDropdown title="Other Wards" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Other Wards</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search Issue" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
                         
                    );
    }
}

export default NavBar;