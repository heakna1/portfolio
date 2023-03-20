import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Picture from "../../images/MeAndHux.jpg"
import "./AboutMe.css"
import Container from "react-bootstrap/esm/Container"


export default function AboutMe() {

    return (
        <Container className="about-container w-75 d-flex align-items-center">
            <Row className="about-row align-items-center">
                <Col md="4">
                    <img src={Picture} className="picture" />
                </Col>
                <Col md="" className="mt-5 mx-3">
                    <Row className="name">
                        <h1>Hey there, I'm Heather</h1>
                    </Row>
                    <Row className="aboutMe">
                        <p>This is where my super interesting mission statement will be!</p>
                    </Row>
                    <Row className="links">
                        <Col></Col>
                        <Col md="1">
                            <a href="https://www.linkedin.com/in/heather-knapp-dev/"><FaLinkedin /></a>
                        </Col>
                        <Col md="1">
                            <a href="https://github.com/heakna1"><FaGithub /></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}