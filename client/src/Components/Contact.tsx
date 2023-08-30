
//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

export default function Contact() {
    return (
        <Container className="d-flex flex-column justify-content-center">
            <h3>Contact Information</h3>
            <Row>
                <Col>
                    <p>email: georgi.maslyankov@gmail.com</p>
                    <p>Linkedin: https://www.linkedin.com/in/georgi-maslyankov-11b5b1241/</p>
                    <p></p>
                </Col>
                <Col>
                    <p>Github: https://github.com/gmaslyankov</p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <p>Send me an email directly:</p>
                <Form>
                    <Form.Group>
                        <Form.Control className="my-4" as='textarea' rows={5}/>
                    </Form.Group>
                </Form>
                <Button>Send</Button>
            </Row>
        </Container>
    )
}