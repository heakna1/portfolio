import Container from "react-bootstrap/esm/Container"
import ProjectCard from "../ProjectCard/ProjectCard"
import {ProjectData} from "./ProjectData.js"

export default function Projects() {
    return (
        <Container>
            {ProjectData.map(data => {
                return <ProjectCard img={data.img} title={data.title} desc={data.desc} deployLink={data.deployLink} gitLink={data.gitLink} />
            })}
        </Container>
    )
}