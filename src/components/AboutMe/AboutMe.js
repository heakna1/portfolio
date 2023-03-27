import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import { Element } from "react-scroll"
import "./AboutMe.css"

export default function AboutMe() {
    return (
        <Element name="aboutme">
            <Container className="aboutme-container w-75 d-flex align-items-center">
                <Row>
                    <p className="aboutme">About Me</p>
                    <p className="aboutme-desc">I am a software developer with a love for books, a passion for writing, and an obsession with video games. My background is in literacy and writing, and I have written fiction stories since my teens. However, the skills of story-telling and world-building are not only important for writing, but also software development. With coding and designing, you are telling the user a story that must keep their attention until the end, and that is why I am interested in front-end development and UI design. I am also studying UX design to become an UX/UI designer.Eventually, I would love to work in the video game industy as well, helping create games that arouse emotion and excitement in users the way they have personally done for me.</p>
                </Row>
            </Container>
        </Element>
    )
}