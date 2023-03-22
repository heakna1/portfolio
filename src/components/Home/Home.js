import Container from 'react-bootstrap/Container'
import AboutMe from "../AboutMe/AboutMe"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import NavBar from "../NavBar/NavBar"
import Resume from "../Resume/Resume"
import Greeting from "../Greeting/Greeting"

export default function Home() {
    return (
        <Container>
            <NavBar/>
            <Greeting/>
            <AboutMe/>
            <Projects/>
            <Resume/>
            <Contact/>
        </Container>
    )

}