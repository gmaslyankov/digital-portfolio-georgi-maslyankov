import { useState, useEffect } from 'react'

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

//Images
import profilePic from '../Assets/LinkedinProfilePic.jpg';


export default function Homepage() {
    const [counter, setCounter] = useState(null);

    // function incrementCounter() {
    //   fetch("http://localhost:3001/increment")
    //   .then((res) => res.json())
    //   .catch((err) => console.log("failed in post", err))
    //   .then((data) => setCounter(data.counter));
    // }
  
    // useEffect(() => {
    //   fetch('/api/message')
    //   .then((res) =>{console.log(res); return res.json()})
    //   .catch((err) => console.log("failed in get", err))
    //   .then((data) => setCounter(data.counter));
    // }, []);
    useEffect(() => {
      (async function () {
        console.log("starting now")
        const { text } = await( await fetch(`/api/message`)).json();
        console.log(text);
        setCounter(text);
      })();
    });

    return (
        <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Image src={profilePic} roundedCircle fluid/>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <h3>Welcome to my Digital Portfolio!</h3>
              <p>My name is Meorgi Maslyankov and I am an aspiring Software Developper from Montreal, Canada.</p>
              <p>I recently graduated from McGill University with a degree in Computational Biology</p>
              <p>My current interests are economics, finance, sustainability, blockchain technologies and web development</p>
              <p>I am currently learning about React, Typescript, NodeJS and Rust</p>
              <p>In addition to my academic interests, I also make music and practice Brazilian Jiu-Jitsu.</p>
              <p>Explore this website for more information about my work!</p>
            </Row>
            <Row>
              <Button onClick={() => {console.log("No function defined")}}>Click to Increment</Button>
              <p>How many times was this button clicked={counter ? counter : "Loading..."}</p>
            </Row>
        </Col>
        </Row>
      </Container>
    )
}