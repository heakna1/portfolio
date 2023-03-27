import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaGithub, FaGlobe } from "react-icons/fa"
import "./ProjectCard.css"
import Container from "react-bootstrap/esm/Container"

export default function ProjectCard({ img, title, desc, deployLink, gitLink, key2 }) {
    return (
        <>
            <Container className="project-container d-flex align-items-center">
                {
                    key2 % 2 === 0 ?
                        <Row className="mb-5">
                            <Col md="5">
                                <img src={img} className="img" />
                            </Col>
                            <Col>
                                <Row>
                                    <h2 className="title px-0">{title}</h2>
                                </Row>
                                <Row className="desc">{desc}</Row>
                                <Row className="link">
                                    <Col></Col>
                                    <Col md="1">
                                        <a href={deployLink}><FaGlobe className="text-black" /></a>
                                    </Col>
                                    <Col md="1">
                                        <a href={gitLink}><FaGithub className="text-black" /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        :
                        <Row className="mb-5">
                            <Col>
                                <Row>
                                    <h2 className="title-right px-0">{title}</h2>
                                </Row>
                                <Row className="desc-right">{desc}</Row>
                                <Row className="link-right">
                                    <Col></Col>
                                    <Col md="1">
                                        <a href={deployLink}><FaGlobe className="text-black" /></a>
                                    </Col>
                                    <Col md="1">
                                        <a href={gitLink}><FaGithub className="text-black" /></a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="3">
                                <img src={img} className="img" />
                            </Col>
                        </Row>
                }
            </Container>
        </>
    )
}