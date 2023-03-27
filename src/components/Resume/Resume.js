import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Element } from "react-scroll"
import {Document, Page} from "react-pdf"
import "./Resume.css"
import ResumePic from "../../images/Resume.png"

export default function Resume() {
    return (
        <Element name="resume">
            <Container className="resume-container w-75">
                <Row>
                <Row>
                    <Col>
                    <p className="resume-title">Resume</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src={ResumePic.toString()} />
                    </Col>
                </Row>
                </Row>
            </Container>
        </Element>
    )
}