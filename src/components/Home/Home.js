import Container from 'react-bootstrap/Container'
import AboutMe from "../AboutMe/AboutMe"
import Projects from "../Projects/Projects"

export default function Home() {
    return (
        <Container fluid='lg'>
            <AboutMe/>
            <Projects/>
        </Container>
    )

}