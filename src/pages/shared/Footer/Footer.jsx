import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegPaperPlane } from 'react-icons/fa';
import { GiCook, GiGamepad } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <GiGamepad style={{ fontSize: '3rem', color: 'white' }} className='me-1' /> <h2 className='text-white me-3'>TASK FORCE</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-5'>

                            <Link to="/" className='me-2 text-decoration-none text-white'>Missions</Link>

                            <Link to="/" className='me-2 text-decoration-none text-white'>Weapeons</Link>

                            <Link to="/" className='me-2 text-decoration-none text-white'>Granedes</Link>

                        </Nav>
                        <Nav>
                            <h4 className="text-white me-3">Subscribe
                            </h4>
                            <p className="text-secondary me-3">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore, placeat laborios
                            </p>
                            <input className="ps-2 py-1 pe-4 rounded" type="email" name="email" id="" placeholder="Email Address" /><Button className="bg-warning rounded"><FaRegPaperPlane style={{ color: 'black' }} /></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Footer;