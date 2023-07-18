import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-body-secondary w-75'>
          <h2 className='text-center mb-4'>
            A Showcase On JWT Based Mern Authentication
          </h2>
          <p className='text-center mb-4'>
            A classic boiler plate code configured with CRUD operations on users
            with a backend API, Token is saved in a HTTP-only cookie. On the
            Frontend it uses react, state management with redux, styling on
            react bootstrap library
          </p>
          <div className='d-flex '>
            <LinkContainer to='/login'>
              <Button variant='primary' className='me-3'>
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Button variant='secondary' className='me-3'>
                Sign Up
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
