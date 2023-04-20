import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Picture from "../../images/MeNHux.png"
import "./Greeting.css"


export default function Greeting() {

    return (
        <Container className="greeting-container w-75 d-flex align-items-center">
            <Row className="greeting-row align-items-center">
                <Col md="5">
                    <img src={Picture} className="picture" />
                </Col>
                <Col className="mt-5 mx-4">
                    <Row className="name">
                        <span className="greeting">Hello, I'm Heather!</span>
                    </Row>
                    <Row className="roles">
                        <p>Frontend Developer| UI/UX Designer| Fiction Writer</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}