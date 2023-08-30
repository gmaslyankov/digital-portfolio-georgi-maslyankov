//Bootstrap Components
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';

//image import
import profilePic from '../Assets/LinkedinProfilePic.jpg';
import otherPic from '../Assets/background.jpg';

export default function Bjj() {
    return (
        <Container>
            <h3>Brazilian Jiu-Jitsu stuff</h3>
            <Carousel>
                <Carousel.Item>
                    <Image src={profilePic} fluid />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={otherPic} fluid />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}