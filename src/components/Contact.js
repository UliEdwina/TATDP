import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
<div  className="contact">
<Container fluid>
  <Row>
    <Col>Contact Me:</Col>
    <Col>< a href="mailto:taarmour@yahoo.com">taarmour@yahoo.com</a></Col>
  </Row>
</Container>
</div>

        )}
        
}


export default About;