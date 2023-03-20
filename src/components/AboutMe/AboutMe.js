import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaLinkedin, FaGithub } from "react-icons/fa"


export default function AboutMe() {

    return (
        <>
            <Row>
                <Col>
                <img/>
                </Col>
                <Col>
                    <Row className="name">Hey there, I'm Heather</Row>
                    <Row className="aboutMe">This is where my super interesting mission statement will be!</Row>
                    <Row>
                    <Col></Col>
                    <Col md="1">
                        <a href="https://www.linkedin.com/in/heather-knapp-dev/"><FaLinkedin/></a>
                    </Col>
                    <Col md="1">
                        <a href="https://github.com/heakna1"><FaGithub/></a>
                    </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}