import React, {useState} from 'react'
import {Container,Col,Row,Button,Form} from 'react-bootstrap'
import LoginScreen from './LoginScreen'

const RegisterScreen = () => {
  const [token, setToken] = useState();

  if(!token) {
    return <LoginScreen setToken={setToken} />
  }
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
             <Col md={6} xs={4}>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterScreen
