import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FaGithub, FaGlobe} from "react-icons/fa"

export default function ProjectCard({img, title, desc, deployLink, gitLink}) {
    return (
        <>
        <Row>
            <Col>
            <img src={img} className="img"/>
            </Col>
            <Col>
                <Row>
                    <h3 className="title">{title}</h3>
                </Row>
                <Row className="desc">{desc}</Row>
                <Row className="link">
                    <Col></Col>
                    <Col md="1">
                        <a href={deployLink}><FaGlobe/></a>
                    </Col>
                    <Col md="1">
                        <a href={gitLink}><FaGithub/></a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
    )
}