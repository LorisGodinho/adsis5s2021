import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';




const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Landing Page</Nav.Link>
                    <Nav.Link as={Link} to="/cores">Cores</Nav.Link>
                    <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
                    <Nav.Link as={Link} to="/produtos2">Produtos2 (DOIS!)</Nav.Link>
                    <Nav.Link as={Link} to="/teste-arthur">Teste Arthur</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;