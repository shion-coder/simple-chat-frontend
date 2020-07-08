import React, { FC, ChangeEvent, KeyboardEvent, SyntheticEvent, useEffect, useState, useRef } from 'react';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';

import { RootState } from 'redux/store';
import { SOCKET_ENDPOINT } from 'config';
import { SOCKET_EVENT, Message, User, RoomData } from 'types';

import InforBar from 'components/info-bar';
import Messages from 'components/messages';
import Form from 'components/form';
import Users from 'components/users';

import { Wrapper, Container } from './chat.styles';

/* -------------------------------------------------------------------------- */

const { JOIN, MESSAGE, SEND_MESSAGE, ROOM_DATA } = SOCKET_EVENT;

const Chat: FC = () => {
  const { name, room } = useSelector((state: RootState) => state.chat);
  const history = useHistory();
  const socket = useRef<SocketIOClient.Socket>();

  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessasge] = useState('');
  const [messages, setMessasges] = useState<Message[]>([]);

  useEffect(() => {
    if (!name && !room) {
      history.push('/');
    }

    socket.current = io(SOCKET_ENDPOINT);

    socket.current.emit(JOIN, { name, room }, (error: string) => {
      if (error) {
        history.push('/');
        alert(error);
      }
    });

    socket.current.on(MESSAGE, (message: Message) => {
      setMessasges((prev) => [...prev, message]);
    });

    socket.current.on(ROOM_DATA, ({ users }: RoomData) => {
      setUsers(users);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [history, name, room]);

  const sendMessage = (e: SyntheticEvent) => {
    e.preventDefault();

    if (message) {
      socket.current?.emit(SEND_MESSAGE, message, () => setMessasge(''));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setMessasge(e.target.value);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && sendMessage(e);

  return (
    <Wrapper>
      <Users users={users} name={name} />

      <Container>
        <InforBar room={room} />

        <Messages messages={messages} name={name} />

        <Form message={message} sendMessage={sendMessage} handleChange={handleChange} handleKeyPress={handleKeyPress} />
      </Container>
    </Wrapper>
  );
};

export default Chat;
