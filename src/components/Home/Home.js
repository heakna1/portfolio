import Container from 'react-bootstrap/Container'
import AboutMe from "../AboutMe/AboutMe"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import NavBar from "../NavBar/NavBar"

export default function Home() {
    return (
        <Container>
            <NavBar/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </Container>
    )

}