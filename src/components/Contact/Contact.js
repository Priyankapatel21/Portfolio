import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Particle from '../Particle';

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pyjisx8', 
      'template_93vqow4', 
      form.current, 
      'tDAzhwD2ywAT1UHYL'
    )
    .then((result) => {
        console.log(result.text);
        setDone(true);
        form.current.reset(); 
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <Container fluid className="contact-section" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "50px" }}>
          {/* Added zIndex and position relative to bring the form to the top layer */}
          <Col md={6} className="contact-form" style={{ zIndex: 5, position: "relative" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "white" }}>
              Contact <strong className="purple">Me</strong>
            </h1>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  required 
                  style={{ color: "black", backgroundColor: "white" }} 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                  style={{ color: "black", backgroundColor: "white" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control 
                  as="textarea" 
                  name="message" 
                  rows={5} 
                  placeholder="Message" 
                  required 
                  style={{ color: "black", backgroundColor: "white" }}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="button-style">
                Send
              </Button>
              <span style={{ marginLeft: "10px", color: "#c084f5" }}>
                {done && "Thanks for contacting me!"}
              </span>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;