import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Element } from "react-scroll"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import "./Contact.css"

export default function Contact() {
    return (
        <Element name="contact">
            <Container className="contact-container mt-5 w-50">
                <Row>
                    <Col>
                        <Row className="contact">
                            <span>Contact Me</span>
                        </Row>
                        <Row className="email">
                            <span>Email: heakna07@gmail.com</span>
                        </Row>
                        <Row className="link">
                            <Col>
                                <a href="https://www.linkedin.com/in/heather-knapp-dev/"><FaLinkedin className="linkedIn text-black" /></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="https://github.com/heakna1"><FaGithub className="git text-black" /></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Element>
    )
}