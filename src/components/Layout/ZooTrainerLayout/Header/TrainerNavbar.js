import React from "react";
import { NavDropdown, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const TrainerNavbar = () => {
    const name = JSON.parse(localStorage.getItem("loginUser")).userName;
    
    const navigate = useNavigate();
    const handleLogout = () => {
        const emptyUser = {
            userId: 0,
            userName: "",
            email: "",
            role: "",
            token: "",
            expiration: ""
        };
        localStorage.setItem("loginUser", JSON.stringify(emptyUser));
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
    }
    return (
            <Navbar expand="md" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Sài Gòn Zoo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/trainer/animal"} >Animal</Nav.Link>
                        <Nav.Link as={Link} to={"/trainer/skills"} >Skills</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        <NavDropdown title= {name} >
                            <NavDropdown.Item href="/trainer/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
export default TrainerNavbar;