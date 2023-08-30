//Bootstrap Components
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button'
// import Carousel from 'react-bootstrap/Carousel';

export default function Music() {
    return (
        <Container>
            <h3>Music stuff</h3>
            <iframe src="https://www.youtube.com/embed/hOllF3TgAsM" title="music video" width={"70%"} height={500}/>
        </Container>
    )
}