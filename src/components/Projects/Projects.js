import Container from "react-bootstrap/esm/Container"
import ProjectCard from "../ProjectCard/ProjectCard"
import { ProjectData } from "./ProjectData.js"
import { Element } from "react-scroll"

export default function Projects() {
    return (
        <Element name="projects">
            <Container className="w-75">
                {ProjectData.map((data, index) => {
                    return <ProjectCard img={data.img} title={data.title} desc={data.desc} deployLink={data.deployLink} gitLink={data.gitLink} key={index} key2={index} />
                })}
            </Container>
        </Element>
    )
}