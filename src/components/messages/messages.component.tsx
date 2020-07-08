import React, { FC } from 'react';

import Message from './message';

import { MessagesProps } from './messages.types';
import { Scroll } from './messages.styles';

/* -------------------------------------------------------------------------- */

const Messages: FC<MessagesProps> = ({ messages, name }) => (
  <Scroll>
    {messages.map((message, i) => (
      <Message key={i} name={name} message={message} />
    ))}
  </Scroll>
);

export default Messages;
