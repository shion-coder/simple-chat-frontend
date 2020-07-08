import React, { FC } from 'react';

import { FormProps } from './form.types';
import { Container, Input, Button } from './form.styles';

/* -------------------------------------------------------------------------- */

const Form: FC<FormProps> = ({ message, sendMessage, handleChange, handleKeyPress }) => (
  <Container>
    <Input placeholder="Type a message..." value={message} onChange={handleChange} onKeyPress={handleKeyPress} />

    <Button onClick={sendMessage}>Send</Button>
  </Container>
);

export default Form;
