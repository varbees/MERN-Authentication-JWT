import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { setCredentials } from '../slices/authSlice';

const Register = () => {
  const [{ name, email, password, confirmPassword }, handleChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) navigate('/');
  }, [navigate, userInfo]);

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (password !== confirmPassword)
      return toast.error('Confirm password does not match with password');
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='name'
              name='name'
              value={name}
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='name@gmail.com'
              name='email'
              value={email}
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              placeholder='Confirm password'
              onChange={handleChange}
              required
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
      )}
    </FormContainer>
  );
};

export default Register;
