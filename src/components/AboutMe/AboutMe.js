import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Picture from "../../images/MeNHux.png"
import "./AboutMe.css"
import Container from "react-bootstrap/esm/Container"


export default function AboutMe() {

    return (
        <Container className="about-container w-75 d-flex align-items-center">
            <Row className="about-row align-items-center">
                <Col md="4">
                    <img src={Picture} className="picture" />
                </Col>
                <Col className="mt-5 mx-3">
                    <Row className="name">
                        <span>Hey there, I'm Heather</span>
                    </Row>
                    <Row className="aboutMe">
                        <p>This is where my super interesting mission statement will be!</p>
                    </Row>
                    <Row className="links">
                        <Col></Col>
                        <Col md="1">
                            <a href="https://www.linkedin.com/in/heather-knapp-dev/"><FaLinkedin className="linkedIn text-black"/></a>
                        </Col>
                        <Col md="1">
                            <a href="https://github.com/heakna1"><FaGithub className="git text-black" /></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}