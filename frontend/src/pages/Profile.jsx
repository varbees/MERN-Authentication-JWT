import { useEffect, useState } from 'react';
import { useForm } from '../helpers/useForm';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { setCredentials } from '../slices/authSlice';
import Loader from '../components/Loader';

const Profile = () => {
  const { userInfo } = useSelector(state => state.auth);

  const [{ name, email, password, confirmPassword }, handleChange] = useForm({
    name: userInfo?.name || '',
    email: userInfo?.email || '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateProfile, { isLoading }] = useProfileMutation();

  const [isFormUpdated, setIsFormUpdated] = useState(false);

  useEffect(() => {
    const isUpdated =
      name !== userInfo?.name ||
      email !== userInfo.email ||
      password !== '' ||
      confirmPassword !== '';
    setIsFormUpdated(isUpdated);
  }, [name, password, confirmPassword, userInfo]);

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (password !== confirmPassword)
      return toast.error('Confirm password does not match with password');
    try {
      const res = await updateProfile({
        _id: userInfo.id,
        name,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('Profile Updated Successfully');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Update Profile</h1>
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
              // className='bg-light focus'
              // style={{ pointerEvents: 'none' }}
              // readOnly
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
            ></Form.Control>
          </Form.Group>
          <Button
            type='submit'
            disabled={!isFormUpdated}
            variant='primary'
            className='mt-3'
          >
            Update
          </Button>
        </Form>
      )}
    </FormContainer>
  );
};

export default Profile;
