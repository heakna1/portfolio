import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaGithub, FaGlobe } from "react-icons/fa"
import "./ProjectCard.css"

export default function ProjectCard({ img, title, desc, deployLink, gitLink, key2 }) {
    return (
        <>
            {
                key2%2===0 ?
        <Row className="mb-5">
            <Col md="3">
            <img src={img.toString()} className="img"/>
            </Col>
            <Col>
                <Row>
                    <h2 className="title px-0">{title}</h2>
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
                        <a href={deployLink}><FaGlobe/></a>
                    </Col>
                    <Col md="1">
                        <a href={gitLink}><FaGithub/></a>
                    </Col>
                </Row>
            </Col>
            <Col md="2">
            <img src={img.toString()} className="img"/>
            </Col>
        </Row>
            }
        </>
    )
}