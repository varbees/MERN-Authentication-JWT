import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async evt => {
    evt.preventDefault();
    console.log('Login Submit');
  };

  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='signature@gmail.com'
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-3'>
          Sign In
        </Button>

        <Row className='py-3'>
          <Col>
            New Customer? <Link to='/register'>Sign Up</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default Login;
