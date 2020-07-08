import React, { FC, ChangeEvent, FormEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { join } from 'redux/slices/chat';

import { useHistory } from 'react-router-dom';

import { Container, Form, Heading, Input, Button } from './home.styles';

/* -------------------------------------------------------------------------- */

const Home: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    room: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(join(state));
    history.push('/chat');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading>Join</Heading>

        <Input name="name" placeholder="Name" value={state.name} onChange={handleChange} />
        <Input name="room" placeholder="Room" value={state.room} onChange={handleChange} />

        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default Home;
