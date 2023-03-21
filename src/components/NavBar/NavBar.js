import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-scroll"
import "./NavBar.css"

export default function NavBar() {
    return (
        <Navbar className='navbar' expand="lg" fixed="top">
            <Container className="navbar py-0">
                <Link  className="link" to="aboutme" spy={true} smooth={true} duration={200} delay={1} activeClass="navlink">About Me</Link>
                <Link className="link" to="projects" spy={true} smooth={true} duration={200} delay={1} activeClass="navlink">Projects</Link>
                <Link className="link" to="resume" spy={true} smooth={true} duration={200} delay={1} activeClass="navlink">Resume</Link>
                <Link className="link" to="contact" spy={true} smooth={true} duration={200} delay={1} activeClass="navlink">Contact</Link>
            </Container>
        </Navbar>
    )
}