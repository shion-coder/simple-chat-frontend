import React, { FC, useRef } from 'react';

import ReactEmoji from 'react-emoji';

import { MessageProps } from './message.type';
import {
  MyUser,
  MyName,
  MyMessage,
  MyText,
  OtherUser,
  OtherName,
  OtherMessage,
  OtherText,
  System,
} from './message.styles';

/* -------------------------------------------------------------------------- */

const Message: FC<MessageProps> = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim();

  const isSentByCurrentUser = useRef(false);

  const CurrentUser = (
    <MyUser>
      <MyName>{trimmedName}</MyName>
      <MyMessage>
        <MyText>{ReactEmoji.emojify(text)}</MyText>
      </MyMessage>
    </MyUser>
  );

  const Other = (
    <OtherUser>
      <OtherMessage>
        <OtherText>{ReactEmoji.emojify(text)}</OtherText>
      </OtherMessage>
      <OtherName>{user}</OtherName>
    </OtherUser>
  );

  if (user === trimmedName) {
    isSentByCurrentUser.current = true;
  }

  if (user === 'Admin') {
    return <System>{text}</System>;
  }

  return isSentByCurrentUser.current ? CurrentUser : Other;
};

export default Message;
