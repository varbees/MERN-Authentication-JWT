import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async evt => {
    evt.preventDefault();
    console.log('Register Submit');
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='name'
            value={name}
            onChange={evt => setName(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='name@gmail.com'
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            placeholder='Password'
            onChange={evt => setPassword(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            value={confirmPassword}
            placeholder='Confirm password'
            onChange={evt => setConfirmPassword(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-3'>
          Sign Up
        </Button>

        <Row className='py-3'>
          <Col>
            Already have an account? <Link to='/login'> Sign In</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default Register;
